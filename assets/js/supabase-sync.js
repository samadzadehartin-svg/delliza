(function () {
  const GLOBAL_KEYS = ['products', 'categories', 'orders', 'staff', 'settings'];
  let client = null;
  let clientSignature = '';
  let lastError = '';

  function clean(value) {
    return String(value || '').trim().replace(/^['\"]|['\"]$/g, '');
  }

  function normalizeSupabaseUrl(rawUrl) {
    let value = clean(rawUrl);
    if (!value) return '';

    // اگر کاربر به اشتباه لینک dashboard را وارد کرده باشد:
    // https://supabase.com/dashboard/project/xxxx
    const dashboardMatch = value.match(/supabase\.com\/dashboard\/project\/([^/?#]+)/i);
    if (dashboardMatch && dashboardMatch[1]) {
      return `https://${dashboardMatch[1]}.supabase.co`;
    }

    if (!/^https?:\/\//i.test(value)) value = `https://${value}`;

    try {
      const url = new URL(value);
      const host = url.hostname;
      if (host.includes('supabase.co')) return `${url.protocol}//${host}`;
      return `${url.protocol}//${host}`;
    } catch (error) {
      return value.replace(/\/(rest\/v1|auth\/v1|storage\/v1).*/i, '').replace(/\/+$/, '');
    }
  }

  function cfg() {
    const c = window.DELIZA_SUPABASE || {};
    return {
      url: normalizeSupabaseUrl(c.url),
      anonKey: clean(c.anonKey)
    };
  }

  function isConfigured() {
    const c = cfg();
    return Boolean(c.url && c.anonKey && window.supabase && window.supabase.createClient);
  }

  function getClient() {
    if (!isConfigured()) return null;
    const c = cfg();
    const signature = `${c.url}|${c.anonKey.slice(0, 12)}`;
    if (!client || clientSignature !== signature) {
      client = window.supabase.createClient(c.url, c.anonKey);
      clientSignature = signature;
    }
    return client;
  }

  function statusText() {
    if (!isConfigured()) return 'Supabase تنظیم نشده؛ داده‌ها محلی هستند.';
    return lastError ? `خطای Supabase: ${lastError}` : 'Supabase متصل است.';
  }

  async function pull(keys = GLOBAL_KEYS) {
    const db = getClient();
    if (!db) return { ok: false, count: 0, error: 'not_configured' };
    try {
      const { data, error } = await db.from('app_data').select('key,value').in('key', keys);
      if (error) throw error;
      let count = 0;
      (data || []).forEach((row) => {
        if (row && keys.includes(row.key) && typeof write === 'function') {
          write(row.key, row.value, { skipRemote: true, silent: true });
          count += 1;
        }
      });
      lastError = '';
      return { ok: true, count };
    } catch (error) {
      lastError = error?.message || String(error);
      console.warn('[Delliza Supabase] pull failed:', error);
      return { ok: false, count: 0, error: lastError };
    }
  }

  async function push(key, value) {
    if (!GLOBAL_KEYS.includes(key)) return { ok: true, skipped: true };
    const db = getClient();
    if (!db) return { ok: false, error: 'not_configured' };
    try {
      const { error } = await db.from('app_data').upsert({
        key,
        value,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });
      if (error) throw error;
      lastError = '';
      return { ok: true };
    } catch (error) {
      lastError = error?.message || String(error);
      console.warn('[Delliza Supabase] push failed:', key, error);
      return { ok: false, error: lastError };
    }
  }

  async function pushAll() {
    const db = getClient();
    if (!db) return { ok: false, error: 'not_configured' };
    const rows = GLOBAL_KEYS.map((key) => ({
      key,
      value: read(key, key === 'orders' ? [] : null),
      updated_at: new Date().toISOString()
    })).filter((row) => row.value !== null);
    try {
      const { error } = await db.from('app_data').upsert(rows, { onConflict: 'key' });
      if (error) throw error;
      lastError = '';
      return { ok: true, count: rows.length };
    } catch (error) {
      lastError = error?.message || String(error);
      console.warn('[Delliza Supabase] pushAll failed:', error);
      return { ok: false, error: lastError };
    }
  }

  async function refreshAndRerender(renderName) {
    const result = await pull();
    if (renderName && typeof window[renderName] === 'function') window[renderName]();
    return result;
  }

  async function currentUser() {
    const db = getClient();
    if (!db) return null;
    const { data, error } = await db.auth.getUser();
    if (error) {
      lastError = error.message || String(error);
      return null;
    }
    return data?.user || null;
  }

  async function roleForUser(userId) {
    const db = getClient();
    if (!db || !userId) return null;
    const { data, error } = await db
      .from('user_roles')
      .select('role,display_name,active')
      .eq('user_id', userId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  function roleIsAllowed(requiredRole, actualRole) {
    if (!requiredRole) return Boolean(actualRole);
    if (requiredRole === actualRole) return true;
    return requiredRole === 'staff' && actualRole === 'admin';
  }

  async function ensureRole(requiredRole) {
    const db = getClient();
    if (!db) return { ok: false, error: 'not_configured' };
    try {
      const user = await currentUser();
      if (!user) return { ok: false, error: 'not_signed_in' };
      const profile = await roleForUser(user.id);
      if (!profile || profile.active === false) return { ok: false, user, error: 'role_not_active' };
      if (!roleIsAllowed(requiredRole, profile.role)) {
        return { ok: false, user, profile, error: 'role_not_allowed' };
      }
      lastError = '';
      return { ok: true, user, profile, role: profile.role, displayName: profile.display_name || user.email };
    } catch (error) {
      lastError = error?.message || String(error);
      console.warn('[Delliza Supabase] ensureRole failed:', error);
      return { ok: false, error: lastError };
    }
  }

  async function signInWithRole(requiredRole, email, password) {
    const db = getClient();
    if (!db) return { ok: false, error: 'not_configured' };
    try {
      const { error } = await db.auth.signInWithPassword({ email: String(email || '').trim(), password });
      if (error) throw error;
      const result = await ensureRole(requiredRole);
      if (!result.ok) {
        await db.auth.signOut();
        return result;
      }
      lastError = '';
      return result;
    } catch (error) {
      lastError = error?.message || String(error);
      console.warn('[Delliza Supabase] signIn failed:', error);
      return { ok: false, error: lastError };
    }
  }

  async function signOut() {
    const db = getClient();
    if (!db) return { ok: true, skipped: true };
    try {
      const { error } = await db.auth.signOut();
      if (error) throw error;
      lastError = '';
      return { ok: true };
    } catch (error) {
      lastError = error?.message || String(error);
      return { ok: false, error: lastError };
    }
  }

  window.DELIZA_SYNC_KEYS = GLOBAL_KEYS;
  window.DELIZA_DB = { isConfigured, statusText, pull, push, pushAll, refreshAndRerender, normalizeSupabaseUrl, currentUser, ensureRole, signInWithRole, signOut };
})();

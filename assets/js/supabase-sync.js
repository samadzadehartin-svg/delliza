
(function () {
  const GLOBAL_KEYS = ['products', 'categories', 'orders', 'staff', 'settings'];
  let client = null;
  let lastError = '';

  function cfg() {
    return window.DELIZA_SUPABASE || {};
  }

  function isConfigured() {
    const c = cfg();
    return Boolean(c.url && c.anonKey && window.supabase && window.supabase.createClient);
  }

  function getClient() {
    if (!isConfigured()) return null;
    if (!client) client = window.supabase.createClient(cfg().url, cfg().anonKey);
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
    await pull();
    if (renderName && typeof window[renderName] === 'function') window[renderName]();
  }

  window.DELIZA_SYNC_KEYS = GLOBAL_KEYS;
  window.DELIZA_DB = { isConfigured, statusText, pull, push, pushAll, refreshAndRerender };
})();

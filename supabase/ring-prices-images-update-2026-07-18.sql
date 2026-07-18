-- Optional Supabase image update for the new uploaded images
-- Upload these files to your public assets path, then run/update URLs as needed:
-- assets/images/fresh-products/croissant-new.png
-- assets/images/fresh-products/donut-new.png
-- assets/images/fresh-products/brownie-new.png

UPDATE products SET image = 'assets/images/fresh-products/donut-new.png' WHERE id IN ('donut-plain','donut-creamfill','donut-chocolate');
UPDATE products SET image = 'assets/images/fresh-products/croissant-new.png' WHERE id IN ('croissant-plain','croissant-cream','croissant-cream-chocolate-nuts');
UPDATE products SET image = 'assets/images/fresh-products/brownie-new.png' WHERE id = 'brownie';

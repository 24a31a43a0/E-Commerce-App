// ===== LUXE SHOP - script.js =====

function addToCart(name, price, emoji) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists → increment qty
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, emoji, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

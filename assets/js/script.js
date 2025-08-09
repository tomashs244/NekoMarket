document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartButton = document.querySelector('#CarritoBtn');
  const productButtons = document.querySelectorAll('.add-to-cart');

  function updateCartDisplay() {
    console.clear();
    console.log('🛒 Carrito actual:', cart);
    alert(`Tienes ${cart.length} producto(s) en el carrito.`);
  }

  productButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.dataset.name;
      const productPrice = parseFloat(button.dataset.price);
      cart.push({ name: productName, price: productPrice });
      updateCartDisplay();
    });
  });

  cartButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío.');
    } else {
      const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
      alert(`Carrito:\n${cart.map(item => `- ${item.name} ($${item.price})`).join('\n')}\n\nTotal: $${total}`);
    }
  });
});
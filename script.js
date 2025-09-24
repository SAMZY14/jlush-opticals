document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
  
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", () => {
  
      menu.classList.toggle("show");
  
    });
  });



let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        cartItems.push({ name, price });
        saveCart();
        updateCart();
    });
});

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Update cart display
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₦${item.price.toLocaleString()}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₦${total.toLocaleString()}`;
}

// Clear cart
function clearCart() {
    cartItems = [];
    saveCart();
    updateCart();
}

// Initialize cart on page load
updateCart();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Display cart
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    sum += item.price;
  });
  total.textContent = `Total: ₹${sum}`;
}

// Search products
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  });
}

// Filter by category
function filterCategory(category) {
  document.querySelectorAll(".product").forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

displayCart();


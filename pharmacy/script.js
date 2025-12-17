function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت الإضافة للسلة 🌿");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartItems");
  let total = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ${item.price}$</span>
        <button onclick="removeItem(${index})">حذف</button>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerText =
    "الإجمالي: " + total + " $";
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function sendMessage(){
    alert("تم إرسال رسالتك بنجاح ☑️")
}
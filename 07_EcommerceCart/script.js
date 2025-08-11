document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Colgate", price: 10.00 },
        { id: 2, name: "Dark Fantasy", price: 11.50 },
        { id: 3, name: "1Plus Nord CE5", price: 321.99 }
    ];

    const cart = [];
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const emptycart = document.getElementById("empty-cart");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name}-$${product.price}</span>
            <button data-id = "${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    })

    function addToCart(product) {
        cart.push(product);
        renderCart();
    };

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptycart.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                    ${item.name}-$${item.price.toFixed(2)}   
                `;
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
            })
        } else {
            emptycart.classList.remove("hidden");
            totalPriceDisplay.textContent = `${0.0}`;
        }
    }

    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout successfully");
        renderCart();
    })

});
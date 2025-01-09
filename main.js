const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');
const addToCartButtons = document.querySelectorAll('.add-cart');
const cartContent = document.querySelector('.cart-content');
const TPriceElement = document.querySelector('.total-price');

let cartItems = [];

function openCart() {
    cart.classList.add('active');
}

function closeCartFunc() {
    cart.classList.remove('active');
}



document.querySelector('.search-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the page from refreshing
    const searchTxt = document.querySelector('.search-txt');
    if (searchTxt.style.width === '0px') {
        searchTxt.style.width = '150px'; // Expand the search input
        searchTxt.style.padding = '0 10px'; // Add padding for better UX
    } else {
    const query = searchTxt.value;
    if (query) {
        handleSearch(query); // Trigger search function if query exists
    }
    searchTxt.style.width = '0px'; // Collapse it if clicked again
    searchTxt.style.padding = '0'; // Remove padding when collapsed
}
});

document.querySelector('.search-txt').addEventListener('keyup', function(e) {
if (e.key === 'Enter') {
    const query = document.querySelector('.search-txt').value;
    if (query) {
        handleSearch(query); // Trigger search function on Enter key
    }
}
});


function handleSearch(query) {
alert("Searching for: " + query); 
    window.location.href = `search_results.html?query=${encodeURIComponent(query)}`;

const products = document.querySelectorAll('.product-box');
products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    if (title.includes(query.toLowerCase())) {
        product.style.display = 'block';
    } else {
        product.style.display = 'none';
    }
});

}


function updateTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    TPriceElement.textContent = `$${total.toFixed(2)}`;
}

function addItemToCart(title, price, imgSrc) {
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${imgSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">$${price.toFixed(2)}</div>
        </div>
        <i class='bx bx-trash cart-remove'></i>
    `;

    cartItem.querySelector('.cart-remove').addEventListener('click', () => {
        cartItems = cartItems.filter(item => item.title !== title);
        cartItem.remove();
        updateTotal();
    });


    cartContent.appendChild(cartItem);

    updateTotal();
}


cartIcon.addEventListener('click', openCart);
addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        openCart();
        const productBox = event.target.closest('.product-box');
        const title = productBox.querySelector('.product-title').textContent;
        const price = parseFloat(productBox.querySelector('.price').textContent.replace('$', ''));
        const imgSrc = productBox.querySelector('.product-img').src;

        cartItems.push({ title, price, imgSrc });

        addItemToCart(title, price, imgSrc);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const buyNowButton = document.querySelector(".btn-buy");
  
    // Check if the button is found
    if (buyNowButton) {
      buyNowButton.addEventListener("click", () => {
        // Log to see if the button click is detected
        console.log("Buy Now button clicked!");
  
        // Redirect to the checkout page
        window.location.href = "payment.html"; 
      });
    } else {
      console.error("Buy Now button not found.");
    }
  });
   
closeCart.addEventListener('click', closeCartFunc);

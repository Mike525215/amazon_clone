let menuOpen = 'no';


document.querySelector('.js-burger-btn').addEventListener('click', () => {
    if (menuOpen === 'no') {
        document.querySelector('.js-dropdown-nav').innerHTML = `
            <ul class="navbar">
                <li><a href="#">Returns & Orders</a></li>
                <li><a href="checkout.html">Cart (<span class="cart-quantity">${calculateTotalCartQuantity()}</span>)</a></li>
            </ul>`;
        menuOpen = 'yes';
    } else {
        document.querySelector('.js-dropdown-nav .navbar').style.animation = 'getBackAnim 0.5s ease-in forwards'
        setTimeout(() => {
            document.querySelector('.js-dropdown-nav').innerHTML = '';
        }, 500);
        menuOpen = 'no';
    }
});
document.querySelector('header .cart .cart-info .cart-quantity').innerHTML = calculateTotalCartQuantity();

let htmlCode = '';

goodsArray.forEach((elem) => {
    htmlCode += `
        <section class="product-card">
            <div class="prod-image">
                <img src="${elem.image}" class="product-image">
            </div>
            <h4 class="product-title">${elem.title}</h4>
            <p class="product-price">$${(elem.price / 100).toFixed(2)}</p>
            <select class="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br>
            <div class="product-added"></div>
            <div class="add-button">
                <button class="js-add-btn add-to-cart-btn" data-product-id="${elem.id}">
                    Add to Cart
                </button>
            </div>
        </section>`;
});

document.querySelector('.css-grid').innerHTML = htmlCode;


const productsQuantities = document.querySelectorAll('.quantity');
const addButtons = document.querySelectorAll('.js-add-btn');
const productsAdded = document.querySelectorAll('.product-added');

addButtons.forEach((product) => {
    product.addEventListener('click', () => {
        const productId = product.dataset.productId - 1;
        productsAdded[productId].innerHTML = `<img src="https://supersimple.dev/projects/amazon/images/icons/checkmark.png" width="20" height="20"> Added!`;
        const res = checkAvailabilityInCart(goodsArray[productId], cartGoods);
        if (res !== false) {
            cartGoods[res].quantity += Number(productsQuantities[productId].value);
        } else {
            goodsArray[productId].quantity = Number(productsQuantities[productId].value);
            cartGoods.push(goodsArray[productId]);
        }
        localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
        document.querySelector('header .cart .cart-info .cart-quantity').innerHTML = calculateTotalCartQuantity();
        setTimeout(() => {
            productsAdded[productId].innerHTML = '';
        }, 3500)
    });
});



function checkAvailabilityInCart(product, cart) {
    let available = 0;
    for (let i = 0; i < cart.length; i++) {
        if (product.id === cart[i].id) {
            return i;
        }
    }
    return false;
}

function calculateTotalCartQuantity() {
    let totalQuantity = 0;
    cartGoods.forEach((product) => {
        totalQuantity += product.quantity;
    });
    return totalQuantity;
}

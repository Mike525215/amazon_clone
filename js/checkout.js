updateValues();
function generateHTML() {
    let htmlCode = '';
    cartGoods.forEach((elem) => {
        htmlCode += `
            <div class="product-card">
                <span class="card-title">Delivery date: Tuesday, June 13</span>
                <br><br>
                <div class="order-info">
                    <div class="product-description">
                        <img class="order-image" src="${elem.image}" alt="">
                        <div class="info">
                            <span class="product-name">${elem.title}</span>
                            <span class="product-price">$${(elem.price / 100).toFixed(2)}</span>
                            <span class="quantity">Quantity: ${elem.quantity}</span>
                            <button class="js-delete-btn delete-btn" onclick="deleteFromCart(${elem.id});">Delete</button>
                        </div>
                    </div>
                    <div class="delivery-block">
                        <span class="block-title">Choose a delivery option:</span>
                        <div class="radios">
                            <div class="radioBox">
                                <input type="radio" name="tuesday" class="checkbox">
                                    <span class="shipping-info">
                                        Tuesday, June 13<br>
                                        <span class="shipping-info-inner">
                                            FREE Shipping
                                        </span>
                                    </span>
                            </div>
                            <div class="radioBox">
                                <input type="radio" name="wednesday" class="checkbox">
                                    <span class="shipping-info">
                                    Wednesday, June 14<br>
                                        <span class="shipping-info-inner">
                                            $4.99 - Shipping
                                        </span>
                                    </span>
                            </div>
                            <div class="radioBox">
                                <input type="radio" name="thursday" class="checkbox">
                                    <span class="shipping-info">
                                        Thursday, June 15<br>
                                        <span class="shipping-info-inner">
                                            $9.99 - Shipping
                                        </span>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return htmlCode;
}


function deleteFromCart(productId) {
    cartGoods.splice(getProductID(productId, cartGoods), 1);
    localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
    updateValues();
}

function getProductID(prod, cart) {
    for (let i = 0; i < cart.length; i++) {
        if (Number(prod) === cart[i].id) {
            return i;
        }
    }
}

function getTotalCheckout() {
    let totalCheckout = 0;
    cartGoods.forEach((elem) => {
        totalCheckout += elem.quantity;
    });
    return totalCheckout;
}

function calculateTotalOrder() {
    let totalOrder = 0;
    cartGoods.forEach((product) => {
        totalOrder += (product.price / 100) * product.quantity
    });
    return totalOrder;
}

function totalOrderPlusTax() {
    return calculateTotalOrder() * 1.1;
}

function updateValues() {
    document.querySelector('.product-cards').innerHTML = generateHTML();
    document.querySelector('.quantity').innerHTML = getTotalCheckout() + ' items';
    document.querySelector('.js-quantity-items').innerHTML = `Items (${getTotalCheckout()})`;
    document.querySelectorAll('.js-order-before-tax-sum').forEach((elem) => {
        elem.innerHTML = `$${calculateTotalOrder().toFixed(2)}`;
    });
    document.querySelector('.js-order-tax-sum').innerHTML = `$${(calculateTotalOrder() * 0.1).toFixed(2)}`;
    document.querySelector('.js-total-sum-order').innerHTML = `$${totalOrderPlusTax().toFixed(2)}`;
}
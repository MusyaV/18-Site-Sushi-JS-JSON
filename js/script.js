const productsContainer = document.querySelector('.shop');

getProducts();

async function getProducts() {
    const response = await fetch('./js/products.json');
    const productsArray = await response.json();
    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="product">
        <div class="product-card">
            <img src="images/${item.imgSrc}" alt="${item.title}">
        </div>
        <button>buy!</button>
    </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

window.addEventListener('load', () => {
    let products = document.querySelectorAll('.product');
    let buttons = document.querySelectorAll('button');
    let openBtn = document.querySelector('.open');
    let shop = document.querySelector('.shop')

    function creatCart() {
        let cart = document.createElement('div');
        let header = document.createElement('h2')
        let field = document.createElement('div');
        let closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        header.textContent = "in my cart";
        closeBtn.textContent = "close cart";

        document.body.appendChild(cart);
        cart.appendChild(header);
        cart.appendChild(field);
        cart.appendChild(closeBtn);

    }
    creatCart();

    let cart = document.querySelector('.cart');
    let field = document.querySelector('.cart-field');
    let closeBtn = document.querySelector('.close');
    let header = document.querySelector('h2');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }
    openBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);

    buttons.forEach(function (item, i) {
        item.addEventListener('click', () => {
            let clone = products[i].cloneNode(true);
            let btn = clone.querySelector('button');

            clone.classList.add('clone');
            btn.remove();
            products[i].remove();
            field.appendChild(clone);
        })
    })
})

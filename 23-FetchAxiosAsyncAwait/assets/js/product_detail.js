async function productData(id) {

    let products = await (await fetch("https://fakestoreapi.com/products")).json();

    let findProduct = products.find((product) => product.id == id);
    return findProduct;

}


let Url = new URLSearchParams(location.search);
let id = Url.get("id");

let productContainer = document.querySelector(".product-container");

productData(id)
    .then((findProduct) => {

        console.log(findProduct)

        productContainer.innerHTML = `
  <div class="product-image">
                        <img src="${findProduct.image}" alt="Product Image" class="img">
                    </div>

                    <div class="product-details">
                        <h4 class="product-title">${findProduct.title}</h4>
                        <p class="product-category">Category:${findProduct.category}</p>
                        <p class="product-cprice">$${findProduct.price}</p>
                        <p class="product-description">${findProduct.description}</p>

                        <div class="product-rating">
                            <span>⭐${findProduct.rating.rate}</span>
                            <span>(${findProduct.rating.count}reviews)</span>
                        </div>

                        <div class="quantity-selector">
                            <button class="btn-minus">-</button>
                            <input type="number" value="1" min="1"/>
                            <button class="btn-plus">+</button>
                        </div>

                        <button class="btn btn-danger add-to-cart-btn">Add to Cart</button>
                    </div>
  `

        let btnMinus = document.querySelector(".btn-minus");
        let btnPlus = document.querySelector(".btn-plus");
        let quantityInput = document.querySelector(".quantity-selector input");

        btnPlus.addEventListener("click", () => {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });

        btnMinus.addEventListener("click", () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });


        let addToCartBtn = document.querySelector(".add-to-cart-btn");

        addToCartBtn.addEventListener("click", () => {
            addBasket(findProduct);
        });

        function addBasket(findProduct) {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = users.find((user) => user.isLogined == true);

            if (!currentUser) {
                alert("Please login to add to basket");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 3000);
                return;
            }

            let userIndex = users.findIndex((user) => user.id == currentUser.id);
            let basket = currentUser.basket || [];

            let existProduct = basket.find((product) => product.id == findProduct.id);
            if (!existProduct) {

                basket.push({ ...findProduct, count: 1 });
            } else {
                existProduct.count += 1;
            }

            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            toast("Product add seccessfuly");
            basketCount();
        }

        function basketCount() {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = users.find((user) => user.isLogined == true);
            if (!currentUser) return;

            let result = currentUser.basket.reduce(
                (acc, product) => acc + product.count, 0);

            let countIcon = document.querySelector(".basketIcon sup");
            countIcon.textContent = result;

        }


    })


let toast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b,rgb(87, 132, 183))",
        },
        onClick: function () { }
    }).showToast();
};


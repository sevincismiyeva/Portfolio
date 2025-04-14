document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find((user) => user.isLogined == true);


    if (!currentUser) {
        toast("Please login to access your wishlist.");
        setTimeout(() => {
            window.location.href = "login.html"; 
        }, 2000);
        return; 
    }

 let userWishlist = currentUser.wishlist;

    function createWishlistItem() {

        userWishlist.forEach(item => {
            let wishlistItem = document.createElement("div");
            wishlistItem.classList.add("wishlist-item");

            let Image = document.createElement("div");
            Image.classList.add("image");

            let img = document.createElement("img");
            img.src = `${item.image}`;

            let title = document.createElement("h5");
            title.classList.add("title");
            title.textContent = `${item.title.slice(0, 50)} . . .`;

            let category = document.createElement("p");
            category.classList.add("category");

            let price = document.createElement("p");
            price.classList.add("price");

            let heartIcon = document.createElement("i");
            heartIcon.classList.add("fa","heart-icon");

        if (currentUser.wishlist.some(wishlist => wishlist.id === item.id)) {
            heartIcon.classList.add("fa-solid","fa-heart");  
            } else {
                heartIcon.classList.add("fa-regular","fa-heart");
            }

            heartIcon.addEventListener("click", () => {
                toggleUserWishlist(item.id, heartIcon);
            });
        

            let removeBtn = document.createElement("button");
            removeBtn.classList.add("btn", "btn-danger");
            removeBtn.textContent = "Remove";

            removeBtn.addEventListener("click", () => {
                removeProduct(item.id);
            });


            Image.appendChild(img);
            wishlistItem.append(Image, title, category, price, removeBtn,heartIcon);

            let wishlist = document.querySelector(".wishlist");
            wishlist.appendChild(wishlistItem);


        });

    }

    function removeProduct(productId) {
        let userIndex = users.findIndex((user) => user.id == currentUser.id);

        let productIndex = currentUser.wishlist.findIndex(
            (product) => product.id == productId
        );

        if (productIndex != -1) {
            currentUser.wishlist.splice(productIndex, 1);
            users[userIndex] = currentUser;
            localStorage.setItem("users", JSON.stringify(users));

            toast("Product removed from wishlist...");
            setTimeout(() => {
                window.location.reload();

            }, 1500);
        }

        
    }

    createWishlistItem();

});

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
document.addEventListener("DOMContentLoaded", async() => {

  let products=(await axios("http://localhost:3000/products")).data;

  
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let currentUser = users.find((user) => user.isLogined == true);
  let usernameBtn = document.querySelector(".username");
  usernameBtn.textContent = currentUser?.username;

  let basket=currentUser.basket || [];

  let login = document.querySelector(".login");
  let register = document.querySelector(".register");
  let logout = document.querySelector(".logout");

  function updateUserStatus() {
    if (currentUser) {
      login.classList.add("d-none");
      register.classList.add("d-none");
      logout.classList.remove("d-none");

    } else {
      login.classList.remove("d-none");
      register.classList.remove("d-none");
      logout.classList.add("d-none");
    }
  };

  let logoutUser = () => {
    currentUser.isLogined = false;
    currentUser.wishlist = [];
    localStorage.setItem("users", JSON.stringify(users));
    usernameBtn.textContent = "username";
    updateUserStatus();

    toast("You have been logged out.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);

  };

  logout.addEventListener("click", logoutUser);

  function createUserCard() {
      products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.cursor="pointer";
  
        card.addEventListener("click",()=>{
          window.location.href=`product_detail.html?id=${product.id}`;
        });
  
        let heartIcon = document.createElement("i");
        heartIcon.classList.add("fa-regular", "fa-heart", "card-heart");
        card.appendChild(heartIcon);
  
        if (currentUser?.wishlist?.some(item => item.id === product.id)) {
          heartIcon.classList.remove("fa-regular");
          heartIcon.classList.add("fa-solid");
  
        }
  
        heartIcon.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleUserWishlist(product.id, heartIcon);
        });
  
        let cardImage = document.createElement("div");
        cardImage.classList.add("card-image");
  
        let img = document.createElement("img");
        img.src = `${product.image}`;
  
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
  
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = `${product.title.slice(0, 18)} . . .`;
  
        let cardCategory = document.createElement("p");
        cardCategory.classList.add("card-category");
        cardCategory.textContent = `${product.category}`;
  
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
  
        let cardPrice = document.createElement("span");
        cardPrice.classList.add("card-price");
        cardPrice.textContent = `${product.price}`
  
        let cardRating = document.createElement("div");
        cardRating.classList.add("card-rating");
  
        let rate = document.createElement("span");
        rate.textContent = `${product.rating.rate}`;
  
        let reviews = document.createElement("span");
        reviews.textContent = `${product.rating.count}`
  
        let addBtn = document.createElement("button");
        addBtn.classList.add("btn", "btn-primary", "add-to-cart");
        addBtn.textContent = "Add Basket";
  
        addBtn.addEventListener("click", (e) =>{
          e.stopPropagation();
          addBasket(product.id)
        } );
  
        cardRating.append(rate, reviews);
        cardFooter.append(cardPrice, cardRating);
        cardContent.append(cardTitle, cardCategory, cardFooter, addBtn);
        cardImage.appendChild(img);
        card.append(cardImage, cardContent)
  
        let cards = document.querySelector(".cards");
        cards.appendChild(card);
      });
  
    };
    

  function toggleUserWishlist(productId, heartIcon) {
    if (!currentUser) {
      toast("Please login to add wishlist");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
      return;
    }


    let userIndex = users.findIndex((user) => user.id == currentUser.id);

    let currentProduct = currentUser.wishlist.some((item) => item.id === productId);

    if (currentProduct) {
      let currentProductIndex = currentUser.wishlist.findIndex(
        (product) => product.id == productId);
      currentUser.wishlist.splice(currentProductIndex, 1);
      users[userIndex] = currentUser;


      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      heartIcon.classList.add("fa-regular");
      heartIcon.classList.remove("fa-solid");


      toast("Product removed from wishlist...");
    } else {
      let addProduct = products.find((product) => product.id == productId);
      currentUser.wishlist.push(addProduct);
      users[userIndex] = currentUser;

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");

      toast("Product add to wishlist...");
    }
  }




  function addBasket(productId) {
    if (!currentUser) {
      toast("Please login to basket");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
      return;
    }

    let userIndex = users.findIndex((user) => user.id == currentUser.id);
    let findProductIndex = currentUser.basket.findIndex(
      (product) => product.id == productId
    );
    
    let exsistProduct=basket.find((product)=>product.id==productId);

    if(findProductIndex == -1){
      let product = products.find((item)=>item.id==productId);
      basket.push({...product,count:1});
    }else{
      exsistProduct.count++;
    }

    users[userIndex].basket=currentUser.basket;
    localStorage.setItem("users",JSON.stringify(users));
    toast("Product add seccessfuly");
    basketCount();
  }

  function basketCount() {
    let result = currentUser.basket.reduce(
      (acc, product) => acc + product.count, 0);

    let countIcon = document.querySelector(".basketIcon sup");
    countIcon.textContent = result;
  }

  basketCount();
  updateUserStatus();
  createUserCard();
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








document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users"));

    let currentUser=users.find((user)=>user.isLogined==true);

    let userIndex=users.findIndex((user)=>user.id==currentUser.id)

    let basket=currentUser.basket;



    let clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear Basket";
    clearBtn.classList.add("btn", "btn-success", "clear-basket");
    clearBtn.style.margin = "20px auto";
    clearBtn.style.display = "block";

    clearBtn.addEventListener("click", () => {
        if (basket.length === 0) {
            toast("Basket is already empty");
            return;
        }

        if (confirm("Are you sure you want to clear the basket?")) {
            basket = [];
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            createBasketItem();
            totalPrice();
            toast("All products removed from basket");
        }
    });


    function createBasketItem(){

        let basketContainer=document.querySelector(".basket");
        basketContainer.innerHTML="";

        basket.forEach((product) => {
        let basketItem=document.createElement("div");
        basketItem.classList.add("basket-item");

        let Image=document.createElement("div");
        Image.classList.add("image");
        
        let img=document.createElement("img");
        img.src=product.image;
        Image.appendChild(img);

        let title=document.createElement("h6");
        title.classList.add("title");
        title.textContent=product.title;

        let category=document.createElement("p");
        category.classList.add("category");
        category.textContent=product.category;

        let price=document.createElement("p");
        price.classList.add("price");
        // price.textContent="$"+product.price;
        price.textContent="$"+(product.price * product.count).toFixed(2);

        let countArea=document.createElement("div");
        countArea.classList.add("count-area");

        let minusBtn=document.createElement("button");
        minusBtn.classList.add("minus-btn");
        minusBtn.textContent="-";
        minusBtn.addEventListener("click",()=>decrement(product.id,countElem,minusBtn));

        let countElem=document.createElement("p");
        countElem.classList.add("count");
        countElem.textContent=product.count;

        let plusBtn=document.createElement("button");
        plusBtn.classList.add("plus-btn");
        plusBtn.textContent="+";
        plusBtn.addEventListener("click",()=>incerement(product.id,countElem,minusBtn));

        let removeBtn=document.createElement("button");
        removeBtn.classList.add("btn","btn-danger");
        removeBtn.textContent="Remove";

        removeBtn.addEventListener("click",()=>removeProduct(product.id));


        countArea.append(minusBtn,countElem,plusBtn);
        basketItem.append(Image,title,category,price,countArea,removeBtn);

        basketContainer.appendChild(basketItem);

        });
            basketContainer.appendChild(clearBtn);
           
    }

    function incerement(productId,countElem,minusBtnElem){

        let existProduct=basket.find((product)=>product.id==productId);
        if(existProduct){
            existProduct.count++; 
            countElem.textContent=existProduct.count;

            if(existProduct.count > 1){
                minusBtnElem.removeAttribute("disabled");
            }
            
        users[userIndex].basket=basket;
        localStorage.setItem("users",JSON.stringify(users));

        let priceElem = countElem.closest(".basket-item").querySelector(".price");
        priceElem.textContent = "$" + (existProduct.price * existProduct.count).toFixed(2);
        }
        totalPrice();
    }

    function decrement(productId,countElem,minusBtnElem){

        let existProduct=basket.find((product)=>product.id==productId);
        if(existProduct){

            if (existProduct.count <= 1) {
                minusBtnElem.setAttribute("disabled", "true");
                return;
            }
            
            existProduct.count--; 
            countElem.textContent=existProduct.count;

            if(existProduct.count === 1){
                minusBtnElem.setAttribute("disabled","true");
            }
            
        users[userIndex].basket=basket;
        localStorage.setItem("users",JSON.stringify(users));

        let priceElem = countElem.closest(".basket-item").querySelector(".price");
        priceElem.textContent = "$" + (existProduct.price * existProduct.count).toFixed(2);
        }
        totalPrice();
    }

    function totalPrice(){
        let paymentCash=0;
        basket.forEach((product)=>{
            paymentCash += product.count * product.price;
        });

        let totalElement=document.querySelector(".total-price");
        totalElement.textContent=paymentCash.toFixed(2);
    }

    function removeProduct(productId){
        let existProductIndex=basket.findIndex(
            (product)=>product.id==productId);

        if(existProductIndex != -1){
            basket.splice(existProductIndex,1);
            users[userIndex].basket=basket;
            localStorage.setItem("users",JSON.stringify(users));
            toast("Product deleted successfully");
        }
        createBasketItem();
        totalPrice();
    }

    createBasketItem();
    totalPrice();



    let basketContainer = document.querySelector(".basket");
        basketContainer.appendChild(clearBtn);
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
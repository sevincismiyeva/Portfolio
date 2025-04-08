// task1 1ci
// 1ci usul
let icon = document.querySelector(".heart i");
let imag = document.querySelector('img').src;
let title = document.querySelector('.cardTitle').textContent;
let text = document.querySelector('.cardText').textContent;
let price = document.querySelector('.cardPrice').textContent;

let product = {
  icon,
  image: imag,
  title,
  text,
  price
};

console.log(product);


// 2ci usul
let btn=document.querySelector(".shopBtn");

let Card=btn.closest(".card");

let icon2 = Card.querySelector(".heart i");
let imag2 = Card.querySelector('img').src;
let title2 =Card.querySelector('.cardTitle').textContent;
let text2 = Card.querySelector('.cardText').textContent;
let price2 =Card.querySelector('.cardPrice').textContent;

let product2 = {
  icon:icon2,
  image: imag2,
  title:title2,
  text:text2,
  price:price2
};

console.log(product2);

// task1 2ci
let card=document.querySelector(".card");
card.style.margin="50px";
card.style.width="300px";
card.style.border="1px solid black";
card.style.padding="10px";

let heart=document.querySelector(".heart");
heart.style.display="inline-flex";
heart.style.alignItems="center";
heart.style.justifyContent="center";
heart.style.width="30px";
heart.style.height="30px";
heart.style.borderRadius="50%";
heart.style.backgroundColor="silver";
heart.style.position="absolute";
heart.style.top="15px";
heart.style.right="15px";
heart.style.cursor="pointer";

let image=document.querySelector(".image");
image.style.width="100%";
image.style.height="300px";
image.style.position="relative";

let img=document.querySelector("img")
img.style.width="100%";
img.style.height="100%";
img.style.borderRadius="10px";

let cardContent=document.querySelector(".cardContent");
cardContent.style.display="flex";
cardContent.style.flexDirection="column";
cardContent.style.alignItems="center";
cardContent.style.gap="10px";
cardContent.style.marginTop="20px";
cardContent.style.color="burlywood";

let cardPrice=document.querySelector(".cardPrice");
cardPrice.style.display="inline-block";
cardPrice.style.padding="5px";
cardPrice.style.borderRadius="5px";
cardPrice.style.backgroundColor="rgb(95, 94, 91)";

let shopBtn=document.querySelector(".shopBtn");
shopBtn.style.width="100%";
shopBtn.style.padding="10px";
shopBtn.style.backgroundColor="skyblue";
shopBtn.style.border="none";
shopBtn.style.cursor="pointer";
shopBtn.style.color="white";
shopBtn.style.textTransform= "uppercase";
shopBtn.style.borderRadius="5px";
shopBtn.style.fontWeight="bold";

// task1 3cu
let cardTitle=document.querySelector(".cardTitle")
cardTitle.textContent = "Kart adı";

let cardText=document.querySelector(".cardText")
cardText.textContent = "Kart haqqında məlumatlar";

let cardPricee=document.querySelector(".cardPrice")
cardPricee.textContent = "500Azn";

let shopBtnn=document.querySelector(".shopBtn")
shopBtnn.textContent = "İndi alın";

let imgg=document.querySelector("img");
imgg.alt = "Yeni şəkil";


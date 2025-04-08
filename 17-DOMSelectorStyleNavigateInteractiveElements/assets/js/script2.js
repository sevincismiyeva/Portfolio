let card = document.createElement("div");
card.className = "card";
card.style.margin = "50px";
card.style.width = "500px";
card.style.border = "1px solid black";
card.style.borderRadius = "10px";


let imageDiv = document.createElement("div");
imageDiv.className = "image";
imageDiv.style.width = "500px";
imageDiv.style.height = "300px";
imageDiv.style.position = "relative";


let heartDiv = document.createElement("div");
heartDiv.className = "heart";
heartDiv.style.position = "absolute";
heartDiv.style.top = "15px";
heartDiv.style.right = "15px";
heartDiv.style.width = "30px";
heartDiv.style.height = "30px";
heartDiv.style.display = "inline-flex";
heartDiv.style.alignItems = "center";
heartDiv.style.justifyContent = "center";
heartDiv.style.cursor = "pointer";

let heartIcon = document.createElement("i");
heartIcon.className = "fa-regular fa-heart"; 
heartIcon.style.fontSize="25px";
heartIcon.style.color="white";
heartDiv.appendChild(heartIcon);


let image = document.createElement("img");
image.src = "https://static.wixstatic.com/media/nsplsh_353631696769547976536b~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_640,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_353631696769547976536b~mv2_d_4896_3264_s_4_2.jpg";
image.style.width = "100%";
image.style.height = "100%";
image.style.borderRadius = "10px 10px 0 0";

imageDiv.appendChild(heartDiv);
imageDiv.appendChild(image);
card.appendChild(imageDiv);


let cardContent = document.createElement("div");
cardContent.className = "cardContent";
cardContent.style.margin = "20px 0 0 20px";


let title = document.createElement("h3");
title.className = "cardTitle";
title.textContent = "DETACHED HOUSE ∙ 5Y OLD";
title.style.color="#606060";


let price = document.createElement("h1");
price.className = "cardPrice";
price.textContent = "$750,000";


let address = document.createElement("h3");
address.className = "cardText";
address.textContent = "742 Evergreen Terrace";
address.style.color="#606060";


let hr1 = document.createElement("hr");
hr1.style.width = "104%";
hr1.style.marginLeft = "-20px";


let iconsDiv = document.createElement("div");
iconsDiv.className = "icons";
iconsDiv.style.display = "flex";
iconsDiv.style.gap = "30px";
iconsDiv.style.alignItems = "center";
iconsDiv.style.fontSize="25px"


let bedroom = document.createElement("div");
bedroom.className = "bedroom";
bedroom.style.display = "flex";
bedroom.style.alignItems = "center";
bedroom.style.justifyContent = "center";
bedroom.style.gap = "10px";

let bedIcon = document.createElement("i");
bedIcon.className = "fa-solid fa-bed";

let bedText = document.createElement("p");
bedText.innerHTML = `3 <strong style="color:#606060">Bedrooms</strong>`;
bedText.style.fontSize="18px";

bedroom.appendChild(bedIcon);
bedroom.appendChild(bedText);


let bathroom = document.createElement("div");
bathroom.className = "bathroom";
bathroom.style.display = "flex";
bathroom.style.alignItems = "center";
bathroom.style.justifyContent = "center";
bathroom.style.gap = "10px";

let bathIcon = document.createElement("i");
bathIcon.className = "fa-solid fa-bath fa-flip-horizontal";

let bathText = document.createElement("p");
bathText.innerHTML=`2 <strong style="color:#606060">Bathrooms</strong>`;
bathText.style.fontSize="18px";


bathroom.appendChild(bathIcon);
bathroom.appendChild(bathText);

iconsDiv.appendChild(bedroom);
iconsDiv.appendChild(bathroom);


let hr2 = document.createElement("hr");
hr2.style.width = "104%";
hr2.style.marginLeft = "-20px";


let realtor = document.createElement("p");
realtor.textContent = "REALTOR";
realtor.style.color="#606060"
realtor.style.fontWeight="bold";


let tiffany = document.createElement("div");
tiffany.className = "tiffany";
tiffany.style.display = "flex";
tiffany.style.alignItems = "center";
tiffany.style.gap = "30px";


let tiffanyImg = document.createElement("img");
tiffanyImg.src = "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=";
tiffanyImg.style.width = "60px";
tiffanyImg.style.height = "60px";
tiffanyImg.style.borderRadius = "50%";


let tiffanyText = document.createElement("p");
tiffanyText.innerHTML = `<strong style="font-size:20px">Tiffany Heffner</strong> <br>(555) 555-4321`;

tiffany.appendChild(tiffanyImg);
tiffany.appendChild(tiffanyText);

cardContent.append(title, price, address, hr1, iconsDiv, hr2, realtor, tiffany);
card.appendChild(cardContent);

let body=document.querySelector("body");
body.appendChild(card)

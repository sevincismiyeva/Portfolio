let numberOne=document.querySelector(".numberOne");
let numberTwo=document.querySelector(".numberTwo");
let result=document.querySelector(".result");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let mult=document.querySelector(".mult");
let devide=document.querySelector(".devide");

plus.addEventListener("click",Plus)

function Plus(){
    if(numberOne.value !== "" && numberTwo.value !==""){
    let toplama=Number(numberOne.value)+Number(numberTwo.value);
    result.textContent=toplama;
    numberOne.value="";
    numberTwo.value="";    
    }else{
        alert("Boş qoymaq olmaz");
    }
}

minus.addEventListener("click",Minus)

function Minus(){
    if(numberOne.value !== "" && numberTwo.value !==""){
    let cixma=Number(numberOne.value)-Number(numberTwo.value);
    result.textContent=cixma;
    numberOne.value="";
    numberTwo.value="";    
    }else{
        alert("Boş qoymaq olmaz");
    }
}

mult.addEventListener("click",Mult)

function Mult(){
    if(numberOne.value !== "" && numberTwo.value !==""){
    let vurma=Number(numberOne.value)*Number(numberTwo.value);
    result.textContent=vurma;
    numberOne.value="";
    numberTwo.value="";    
    }else{
        alert("Boş qoymaq olmaz");
    }
}

devide.addEventListener("click",Devide)

function Devide(){
    if(numberOne.value !== "" && numberTwo.value !==""){
    let bolme=Number(numberOne.value)/Number(numberTwo.value);
    result.textContent=bolme;
    numberOne.value="";
    numberTwo.value="";    
    }else{
        alert("Boş qoymaq olmaz");
    }
}
// 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.
let toplama = (x, y) => x + y;
console.log(toplama(10, 25));

let cixma = (x, y) => x - y;
console.log(cixma(50, 35));

let vurma = (x, y) => x * y;
console.log(vurma(9, 19));

let bolme = (x, y) => x / y;
console.log(bolme(100, 25));

// 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)
let rest = (...ededler) => {
    let tek = [];
    let cut = [];
    for (let i = 0; i < ededler.length; i++) {
        if (ededler[i] % 2 == 0) {
            cut.push(ededler[i]);
        } else {
            tek.push(ededler[i]);
        }
    }
    console.log("Tək ədədlər:", tek);
    console.log("Cüt ədədlər:", cut);
}
rest(14, 20, 35, 40, 57, 60, 100);

// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]
function arrey(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 == 0 && arr[i] % 5 == 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}
arrey([14, 20, 35, 40, 57, 60, 100]);

// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.
function metn(cumle,simvol){
    let say=0;
    for( let i=0;i<cumle.length;i++){
        if(cumle[i]==simvol){
            say++;
        }
    }
    return say;
}
console.log(metn("Code Academy","a"));
console.log(metn("Azərbaycan Texniki Universiteti","i"));

// 5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)
function say(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i;
        }
    }if(sum>num){
        return "Abundant";
    }else{
        return "Deficient";
    }
}
console.log(say(12));
console.log(say(13));

// 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.
let arr = [2, 3, 6, 5];
function massiv(arr) {
    let newMassiv = [];
    for (let i = 0; i < arr.length; i++) {
        newMassiv[i] = arr[i] ** 2;
    }
    return newMassiv;
}
console.log(massiv(arr));

// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]
let user=[
    {name:"Miray",age:25},
    {name:"Nuray",age:5},
    {name:"Aytac",age:40},
    {name:"Aydan",age:17},
    {name:"Jasmin",age:21},
    {name:"Ayla",age:34},
]

function element(user){
    let az=user[0];
    let cox=user[0];
    for (let i = 0; i < user.length; i++){
        if(user[i].age<az.age){
            az=user[i];
        }if(user[i].age>cox.age){
            cox=user[i];
        }
    }
    console.log(az.name,":",az.age);
    console.log(cox.name,":",cox.age);
    console.log("Ferqi:",cox.age-az.age);
}
element(user)
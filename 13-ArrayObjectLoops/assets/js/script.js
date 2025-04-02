// 1.Armstrong ededlerini yazan algorithm.(armstronq ədədləri bütün rəqəmlərinin kubunun toplamına bərabər olan ədədlərdir.)
console.log("Armstrong ədədləri:");
for (let num = 1; num <= 1000; num++) {
    let sum = 0;

    for (let ededNum = num; ededNum > 0; ededNum = (ededNum - ededNum % 10) / 10) {
        let sonu = ededNum % 10; 
        sum += sonu ** 3; 
    }

    if (sum === num) {
        console.log(num);
    }
}



// 2.Multiplication Table(1-10 vurma cedveli)
console.log("Vurma cədvəli:");
for(let i=1; i<=10; i++){
    let x="";
    for(let j=1; j<=10; j++){
        x+=(i*j) + " ";
    }
console.log(x);9
}


// 3.Verilmis userlerden ibaret arreyde yasi 30-dan boyuk ve kicik olanlari consola yazdirmaq.

let user=[
    {name:"Leyla",age:21},
    {name:"Lalə",age:43},
    {name:"Jalə",age:49},
    {name:"Mərcan",age:5},
    {name:"Ayla",age:32},
    {name:"Busə",age:29},
    {name:"Nuray",age:9},
    {name:"Miray",age:15},
]

console.log("Yaşı 30-dan kiçik olanlar:")
for( i=0 ; i<user.length ; i++){
    if(user[i].age<30){
        console.log(user[i].name);
    }
}

console.log("Yaşı 30-dan böyük olanlar:");
for( i=0 ; i<user.length ; i++){
    if(user[i].age>30){
        console.log(user[i].name);
    }
}

// 4.Arraye daxil edilən 10 ədədin ededi ortasini tapan proqramın alqoritmi yazmaq.(While loop ile)

let numbers = [5, 10, 15, 25, 20, 30];
let sum = 0;
i = 0;
while (i < numbers.length) {
    sum += numbers[i]; 
    i++; 
}
console.log("Ədədi orta: ", sum/numbers.length);


// 5.Girilen ededin istenilen edede göre modunu(%) tapan algoritm yazmaq.
function Mod(num, mod) {
    for (let i = num; i >= mod; i -= mod) {
        if (i < mod) return i;
    }
    return num % mod;
}

console.log("Mod nəticəsi: ", Mod(47, 4));





let arr = [203, 19, 2, 13, 196, 86, 35, 77];
// 6.Verilmis array-de en boyuk ededin tapilmasi.

let big = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
    }
}
console.log("Ən böyük element:", big);

// 7.Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

let min = 0;
let max = 0;
let minElement=arr[0];
let maxElement=arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        min = i;
        }
        if (arr[i] > maxElement) {
            maxElement = arr[i];
            max = i;
        }
    }
    [arr[min], arr[max]] = [arr[max], arr[min]];
    console.log("Yerləri dəyişdirilmiş array:", arr);


// 8.Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

let plus = 0;
for (let i=0; i<arr.length; i++) {
    if (arr[i] !== minElement && arr[i] !== maxElement) {
        plus+=arr[i];
    }
}
console.log("Min və max olmadan cəm:", plus);

// 9.Verilmiş array-e daxil olunan ədədin arreyde olub olmadığını təyin edən proqram tərtib edin.
function Array(num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }return false;
}
console.log("Daxil edilən ədəd arraydədirmi?", Array(19)); 


// 10.Verilmiş array-in elementlerinden neçəsinin bir rəqəmi, neçəsinin iki rəqəmi, ve necesinin uc reqemi oldugunu tapan algrithm yazmaq.

let one=0;
let two=0;
let three=0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>=0 && arr[i]<10){
        one ++;
    }else if (arr[i] >= 10 && arr[i] < 100) {
        two++;
    } else if (arr[i] >= 100 && arr[i] < 1000) {
        three++;
    }
}
console.log("Bir rəqəmli ədədlər:", one);
console.log("İki rəqəmli ədədlər:", two);
console.log("Üç rəqəmli ədədlər:", three);


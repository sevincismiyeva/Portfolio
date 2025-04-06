// String Methods:
// task1 
function sait(str){
  return str.split("").filter(char=>"aıoueəiöüAIOUEƏİÖÜ".includes(char));
}
console.log(sait("I am frontend DEVELOPER I LEARN Javascript"));

// task2
function words(str){
  let word=str.split(" ");
  return word.length;
}
console.log(words("I am frontend DEVELOPER I LEARN Javascript"));

// task3
let enUzunSoz = (cumle) => {
    let sozler = cumle.split(" ");
    return sozler.reduce((evvelki, indiki) =>
        indiki.length > evvelki.length ? indiki : evvelki
    );
}
console.log(enUzunSoz("I am frontend DEVELOPER I LEARN Javascript"));

// task4
let upper = (cumle) => {
    let sozler = cumle.split(" ");
    return sozler.map((soz, index) => 
        soz === soz.toUpperCase() ? { soz, index } : null
    );
}
console.log(upper("I am frontend DEVELOPER I LEARN Javascript"));

// task5
function twoUpper(str){
  let sozler=str.split(" ");
  return sozler.filter(soz=>{
    let herfler=soz.split("").filter(herf=>herf===herf.toUpperCase()).length
    return herfler>2;
  });
}
console.log(twoUpper("I am frontend DEVELOPER I LEARN Javascript"));
// task6. 
function basHerf(str){
  let herSoz=str.split(" ");
  let herBasHerf=herSoz.map(soz=>soz.charAt(0).toUpperCase()).join("");
  return herBasHerf;
}
console.log(basHerf("I am a Code Academy student."));

// task7.
function ixtisar(str) {
  let words = str.split(" ");
  
  let short = words.map(word => {
    if (word.length >= 4) {
      return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
    } else {
      return word;
    }
  });
  return short.join(" ");
}
console.log(ixtisar("I am frontend DEVELOPER I LEARN Javascript"));


// Array Methods:
// task1
function tekrar(arr) {
    const ferqli = [];
    const eyni = {};
    
    arr.forEach(num => {
      if (ferqli.includes(num)) {
        eyni[num] = (eyni[num] || 0) + 1;
      } else {
        ferqli.push(num);
      }
    });
    console.log("Tekrar olunmayan elementler: ",ferqli);
    console.log("Tekrarlananlar: ",eyni);
  }
tekrar([2,4,7,9,10,15,2,5,7,2,4,2,7]);

// task2
function polindrom(str) {
    let ters = str.split('').reverse().join('');
    return str === ters;
}
console.log(polindrom('ANA'));

// task3
function elements(arr, num) {
    return arr.filter(element => element < num).length;
}
console.log(elements([2,12,9,3,5,1,11,],9));

// task4
const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];

let hobbies = (customers) => {
    return customers.reduce((acc, customer) => {
        acc.push(...customer.personal.hobbies);
        return acc;
    }, []);
}
console.log(hobbies(customers)); 

// task5.
function randomArray() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const square = arr.map(num => Math.pow(num, 2));

  console.log("Array: ", arr);
  console.log("Max: ", max);
  console.log("Min: ", min);
  console.log("Sum: ", sum);
  console.log("Average: ", average);
  console.log("Square: ", square);
}
randomArray();



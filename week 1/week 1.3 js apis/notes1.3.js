// JS-APIs Complete Notes - Cleaned and Enhanced


// -> STRINGS
console.log("=> STRINGS:");

let str = "Drashti Madhiwala";
console.log("Str: " + str); // Drashti Madhiwala

// 1) Length
console.log("1) Length:");
console.log("Length of " + str + " is " + str.length); // 18

// 2) indexOf
let target = "Madhiwala";
console.log("2) indexOf:");
console.log("Start index of '" + target + "' is " + str.indexOf(target)); // 8

// 3) lastIndexOf
let str2 = "Drashti Madhiwala Madhiwala Madhiwala";
console.log("3) lastIndexOf:");
console.log("Start index of last repetition of '" + target + "' is " + str2.lastIndexOf(target)); // 28

// 4) slice
console.log("4) Slice:");
console.log("Slice between 0 - 7 (7 not included)): " + str.slice(0, 7)); // Drashti

// 5) substr
console.log("5) Substr (Slice's predecessor):");
console.log("Substring from index 1 with length 7: " + str.substr(1, 7)); // rashti 

// 6) split
console.log("6) Split: Remove based on a delimiter");
console.log("' ' being the delimiter: ", str.split(" ")); // ["Drashti", "Madhiwala"]

// 7) trim
let str3 = "           Drashti         Madhiwala      ";
console.log("7) Trim: Remove unnecessary spaces:");
console.log("Trimmed string: '" + str3.trim() + "'"); // 'Drashti         Madhiwala'

// 8) toUpperCase / toLowerCase
console.log("8) Uppercase:");
console.log("Uppercase String: " + str.toUpperCase()); // DRASHTI MADHIWALA
console.log("9) Lowercase:");
console.log("Lowercase String: " + str.toLowerCase()); // drashti madhiwala

// 10) replace
console.log("10) Replace:");
let replacement = "Madhiwala Shukla";
console.log("Replaced '" + target + "' with '" + replacement + "': " + str.replace(target, replacement));


// => NUMBERS:
console.log("\n=> NUMBERS:");
console.log("Basic logic is converting a string to int or float, using parseFloat will retain the decimal whereas parseInt won't:");
console.log(parseInt(49)); // 49
console.log(parseInt("49abcd")); // 49
console.log(parseInt("abcd49")); // NaN
console.log(parseInt("4abcd9")); // 4
console.log(parseInt("4.9")); // 4
console.log(parseFloat("4.9abcd")); // 4.9
console.log(parseFloat("4.9")); // 4.9


// => ARRAYS
console.log("\n=> JAVASCRIPT ARRAY METHODS:");

let arr = ["apple", "banana", "cherry"];
console.log("Original Array:", arr); // ['apple', 'banana', 'cherry']

arr.push("dragonfruit");
console.log("After push('dragonfruit'):", arr); // ['apple', 'banana', 'cherry', 'dragonfruit']

arr.pop();
console.log("After pop():", arr); // ['apple', 'banana', 'cherry']

arr.unshift("avocado");
console.log("After unshift('avocado'):", arr); // ['avocado', 'apple', 'banana', 'cherry']

arr.shift();
console.log("After shift():", arr); // ['apple', 'banana', 'cherry']

arr.splice(1, 1, "blueberry", "blackberry");
console.log("After splice(1, 1, 'blueberry', 'blackberry'):", arr); // ['apple', 'blueberry', 'blackberry', 'cherry']

let sliced = arr.slice(1, 3);
console.log("slice(1, 3):", sliced); // ['blueberry', 'blackberry']

let tropical = ["mango", "pineapple"];
let allFruits = arr.concat(tropical);
console.log("concat(['mango', 'pineapple']):", allFruits); // ['apple', 'blueberry', 'blackberry', 'cherry', 'mango', 'pineapple']

console.log("forEach print:");
function printFruit(arr) {
    console.log(arr);
}
arr.forEach(printFruit);
// 0: apple
// 1: blueberry
// 2: blackberry
// 3: cherry

let upperFruits = arr.map(item => item.toUpperCase());
console.log("map() toUpperCase:", upperFruits); // ['APPLE', 'BLUEBERRY', 'BLACKBERRY', 'CHERRY']

let bFruits = arr.filter(item => item.startsWith('b'));
console.log("filter() startsWith 'b':", bFruits); // ['blueberry', 'blackberry']

let numbers = [10, 20, 30];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce() sum of [10, 20, 30]:", sum); // 60


// => CLASSES
console.log("\n=> CLASS EXAMPLE:");

class Animal {
    constructor(name, legs, speaks) {
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    static myType() {
        console.log("I am an animal.");
    }
    speak() {
        console.log("Hi there, I " + this.speaks);
    }
}

let dog = new Animal("Dog", 4, "bark");
dog.speak(); // Hi there, I bark
Animal.myType(); // I am an animal.


// => DATE METHODS
console.log("\n=> DATE METHODS:");

const currentDate = new Date();
console.log("Current Date:", currentDate);
console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

currentDate.setFullYear(2022);
console.log("After setFullYear:", currentDate);

currentDate.setMonth(5);
console.log("After setMonth:", currentDate);

console.log("Time in milliseconds since 1970:", currentDate.getTime());

const newDate = new Date(2023, 8, 15);
console.log("New Date:", newDate);


// => JSON
console.log("\n=> JSON:");

let obj = '{"name": "Drashti", "gender": "female", "net worth": "20 Billion"}';
let parsed_obj = JSON.parse(obj);
console.log("Parsed Object:", parsed_obj);

let stringed_obj = JSON.stringify(parsed_obj);
console.log("Stringified Object:", stringed_obj);


// => MATH
console.log("\n=> MATH:");

let value = 4.7;
console.log("Original Value:", value);
console.log("After round():", Math.round(value)); // 5
console.log("After ceil():", Math.ceil(value)); // 5
console.log("After floor():", Math.floor(value)); // 4
console.log("After random():", Math.random()); // random [0-1)
console.log("After max():", Math.max(5, 10, 15)); // 15
console.log("After min():", Math.min(5, 10, 15)); // 5
console.log("After pow():", Math.pow(value, 2)); // 22.09
console.log("After sqrt():", Math.sqrt(value)); // ~2.16


// => OBJECT METHODS
console.log("\n=> OBJECT METHODS:");

let plainObj = {
  name: "Drashti",
  gender: "female",
  worth: "20 Billion"
};

console.log("Original Object:", plainObj);
console.log("Object.keys():", Object.keys(plainObj)); // ['name', 'gender', 'worth']
console.log("Object.values():", Object.values(plainObj)); // ['Drashti', 'female', '20 Billion']
console.log("Object.entries():", Object.entries(plainObj)); // [['name', 'Drashti'], ['gender', 'female'], ...]
console.log("hasOwnProperty('name'):", plainObj.hasOwnProperty("name")); // true

let newObj = Object.assign({}, plainObj, { hobby: "painting" });
console.log("Object.assign():", newObj);

//1 Greet User
console.log("1) Greet User Program: ");
let firstname = "Drashti";
let lastname = "M";
console.log("Hey there " + firstname + " " + lastname + "! How are you doing today?");
console.log();



//2 Greet User based on gender
console.log("2) Greet User based on gender: ");
let gender = "Female";
if (gender == "Female") {
    console.log("Hey there Ms., How are you doing today?");
} else {
    console.log("Hey there Mr., How are you doing today?");
}
console.log();



//3 Print numbers from 1 to 1000
console.log("3) Print numbers from 1 to 1000: ");
for (let i = 0; i <= 1000; i++) {
    console.log(i);
}
console.log();



//4 Print all even numbers in an array
console.log("4) Print all even numbers in an array: ");
const num = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        console.log(num[i])
    }
}
console.log();



//5 Print biggest number in an array
console.log("5) Print biggest number in an array: ");
const num1 = [1,2,3,54,67,83,12]
let largest_num = num1[0];
for (let i = 0; i < num1.length; i++) {
    if (num1[i] > largest_num) {
        largest_num = num1[i];
    }
}
console.log(largest_num)
console.log();



//6 Reverse all elements of an array
console.log("6) Reverse all elements of an array: ");
const num2 = [1,2,3,4,5,6,7,8,9,10]
for (let i = num2.length-1; i >= 0; i--) {
    console.log(num2[i]);
}
console.log();



//7 Print all male people's first name given complex object
console.log("7) Print all male people's first name given complex object: ");
const people = [{
    first_name: "Drashti",
    age: 19,
    gender: "female"
}, {
    first_name: "Rahul",
    age: 21,
    gender: "male"
}, {
    first_name: "Rishi",
    age: 20,
    gender: "male"
}];
for (let i = 0; i < people.length; i++) {
    if (people[i]["gender"] == "male") {
        console.log(people[i]["first_name"]);
    }
}
console.log();



//8 Function that prints sum of 2 numbers 
console.log("8) Function that prints sum of 2 numbers: ");
function sum(a,b) {
    let ans = a + b;
    return ans;
}
let ans_sum = sum(1,2);
console.log(ans_sum);
console.log();



//9 Displaying the result in a pretty format 
console.log("9) Displaying the result in a pretty format: ");
function sum2(a,b) {
    let ans = a + b;
    print_ans(ans)
}
function print_ans(res) {
    console.log("Result: "+res);
}
function print_ans_passive(res) {
    console.log("Sum's Result: "+res);
}
sum2(1,2);
console.log();




//10 Displaying the result in a passive format
console.log("10) Displaying the result in a passive format: ");
function sum1(a,b) {
    let ans = a + b;
    print_ans_passive(ans)
}
function print_ans_passive(res) {
    console.log("Sum's Result: "+res);
}
sum1(1,2);
console.log();



//Another way 
console.log("Another way: (Callback Function)");

// 9) Displaying the result in a pretty format (Callback Function)
console.log("9) Displaying the result in a pretty format: ");
function sumWithCallbackPretty(a, b, fnToCall) {
    let ans = a + b;
    fnToCall(ans);
}
sumWithCallbackPretty(1, 2, print_ans);
console.log();


// 10) Displaying the result in a passive format (Callback Function)
console.log("10) Displaying the result in a passive format: ");
function sumWithCallbackPassive(a, b, fnToCall) {
    let ans = a + b;
    fnToCall(ans);
}
sumWithCallbackPassive(1, 2, print_ans_passive);
console.log();


//NOTE - 1 setTimeout is a function that takes a function as an argument and calls it after a certain amount of time.
console.log("setTimeout: a function that takes a function as an argument and calls it after a certain amount of time.");
function greet() {
    console.log("Hello World");
}
console.log();
setTimeout(greet, 5000); // 5000 milliseconds = 5 seconds
console.log("setInterval: a function that takes a function as an argument and calls it repeatedly after a certain amount of time. setInterval(greet, 1000);");




// Create a counter in JavaScript (Counts down 30 -> 0)
console.log("11) Create a counter in JS (30 -> 0): ");
function counter() {
    for (let i = 30; i >= 0; i--) {
        setTimeout( function() {
            console.log(i);
        }, (30 - i) * 1000); // delay increases each second
    }
}
counter();

// Create a terminal clock
console.log("12) Create a terminal clock [HH:MM:SS]=> ");
setInterval(function() {
  let now = new Date(); // get the current time

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // Add 0 in front if < 10
  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  console.clear(); // clear the terminal each second
  console.log(h + ":" + m + ":" + s);
}, 1000); // update every 1000ms = 1 sec

console.log();

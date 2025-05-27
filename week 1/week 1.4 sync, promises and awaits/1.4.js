//Sync -> One after one
//Async -> Multiple tasks together using context switching
//!!!!!!!// 
/*
console.log("**NOTE** Comment out the other code or else it will interfere with other code.");
console.log("Example of Async -> ");


console.log("Using setTimeout -> ");
function findSumTill(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}
function findsum() {
    console.log(findSumTill(10));
}
setTimeout(findsum,1000);
console.log("Hello!");


console.log("Using fs -> ");
const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data) {
    console.log(data);
});
console.log("Hello2!");


console.log("Promise -> A better way of writing above code. [Syntactical sugar] ");
console.log("1. The ugly way -> ");
const fs = require("fs");
function DrashtiReadsFile(cb) {
    fs.readFile("a.txt","utf-8",function(err,data) {
        cb(data);
    });
}
function onBoard(data) {
    console.log(data);
}
DrashtiReadsFile(onBoard);
console.log("hello!");

console.log("The prettier way (aka a Promise) -> ");
const fs = require("fs");
const { resolve } = require("path");
function DrashtiReadsFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt","utf-8",function(err,data) {
            resolve(data);
        });
    });
}
function onBoard(data) {
    console.log(data);
}
DrashtiReadsFile().then(onBoard);


console.log("Another example of a Promise -> ");
function DrashtiReadsFile() {
    return new Promise(function(resolve) {
        setTimeout(resolve,5000);
    });
}
let a = DrashtiReadsFile();
a.then(function() {
    console.log("Hi there");
})
*/
console.log("Async await [No callbacks, No .then syntax] -> ");
function DrashtiReadsFile() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hi there!");
        },1000);
    });
    return p;
}
async function main() {
    const x = await p;
    console.log(x);
}
main();
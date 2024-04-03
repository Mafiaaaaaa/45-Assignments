"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Age = 18;
let fruit = "CHERRY";
let fifty = 50;
let sixty = 60;
let three = 3;
let five = 5;
let thirty = 30;
let fruits = ["apple", "blueberry", "fig"];
// test for equality & inequality
console.log("My age is 18 years");
console.log(Age == 18);
console.log("My age is 33 years");
console.log(Age == 33);
// test for lower case
console.log("printing in lowerrcase");
console.log(fruit.toLowerCase() == "CHERRY");
console.log("printing in lowerrcase");
console.log(fruit.toLowerCase() != "CHERRY");
//numerical test with ==, !=, >, <  
console.log("30 is = 30");
console.log(thirty == 30);
console.log("30 != 30");
console.log(thirty != 30);
console.log("20 is > 50");
console.log(20 > 50);
console.log("3 is < 5");
console.log(three < 5);
console.log("3 is <= 5");
console.log(three <= 5);
console.log("3 is >= 5");
console.log(three >= 5);
// test for and & or operators
console.log("50 = 50 and 50 > 60");
console.log(fifty == 50 && 30 < sixty);
console.log("50 = 50 and 30 > 60");
console.log(fifty != 50 && 30 < sixty);
console.log("50 = 50 OR 30 > 60");
console.log(fifty == 50 || 30 > sixty);
console.log("50 = 50 OR 30 > 60");
console.log(fifty != 50 || 30 > sixty);
// test whether item is in array
console.log("blueberry is include in array?");
console.log(fruits.includes("blueberry"));
console.log("banana is include in array?");
console.log(fruits.includes("banana"));

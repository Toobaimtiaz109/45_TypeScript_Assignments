"use strict";
//More Tests
//Test 1
let string1 = "hello";
console.log("Equality test:", string1 == "hello");
let string2 = "world";
console.log("Inequality test:", string2 != "world");
//Test 2
let name1 = "John";
let name2 = "jane";
console.log("Lowercase test:", name1.toLowerCase() == "john");
console.log("Lowercase test:", name2.toLowerCase() == "JANE");
//Test 3
let num1 = 10;
let num2 = 20;
console.log("Equality test:", num1 == 10);
console.log("Inequality test:", num2 != 10);
console.log("Greater than test:", num2 < num1);
console.log("Less than test:", num1 < num2);
console.log("Greater than or equal to test:", num1 >= 10);
console.log("Less than or equal to test:", num2 >= 20);
//Test 4
let x = 5;
let y = 10;
let z = 15;
console.log("And operator test:", x < y && y < z);
console.log("Or operator test:", x > y || y > z);
//Test 5
let fruits = ["apple", "banana", "orange"];
console.log("Array includes test:", fruits.includes("banana"));
//Test 6
console.log("Array inculde item: ", fruits.includes("grape"));

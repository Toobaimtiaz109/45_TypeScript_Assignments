"use strict";
// To Lowercase..
let NAME = "It is very cold outside.";
let lowercaseName = NAME.toLowerCase();
console.log(lowercaseName);
// To Uppercase..
let uppercaseName = NAME.toUpperCase();
console.log(uppercaseName);
// To Tittlecase..
let words = NAME.split(" "); //Split method will split the sentence into an array whenever it encounters a space..
let Tittlecase = ""; //Empty quotations means all the words will be store in this quotation..
for (let i = 0; i < words.length; i++) {
    Tittlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(Tittlecase);
// CharAt() method is useful when we need to access individual characters in a string by their position.

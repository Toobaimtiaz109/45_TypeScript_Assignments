"use strict";
//Shrinking Guests Lists..
let Guests = ["Hiader", "Ali", "Kamran", "Ibrahim", "Moiez", "Tooba", "Farah"];
console.log("=>We can invite only two people for dinner.");
//Here i is equal to the length of the array and its value starts from the last index and continuing until the index should be greater than 1 and i has the decrement of 1 untill the length of i is greater than 1. 
for (let i = Guests.length - 1; i > 1; i--) {
    let removedGuest = Guests.pop();
    console.log(`Sorry! ${removedGuest} , We can't invite you.`);
}
console.log("\n=> Invitations to the remaining guests:");
for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]},\nYou are still invited to dinner. Looking forward to seeing you!\n`);
}
Guests.splice(0); //It means it removes all the elements from the array starting from 0. 
console.log("Remaining guests after the dinner:\n", Guests);

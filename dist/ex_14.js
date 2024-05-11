"use strict";
//Changing Guests List..
let Guestslist = ["Ali", "Abu Bakar", "Ibrahim", "Moiez"];
// Guestslist.splice(1, 1) removes one element from the Guestslist array starting at index 1.
// [0] accesses the first (and only) element that was removed from the array.
let guestUnattend = Guestslist.splice(1, 1)[0];
console.log(`=> Opps! ${guestUnattend} , can't make it to the Dinner.\n`);
Guestslist.push("Tooba");
for (let i = 0; i < Guestslist.length; i++) {
    console.log(`Dear ${Guestslist[i]} ,\nyou are cordially invited to dinner. It would be an honor to have you join us.\nThankyou.\n`);
}

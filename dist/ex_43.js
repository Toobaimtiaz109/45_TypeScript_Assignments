"use strict";
// Sandwich..
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("-" + item);
    });
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");

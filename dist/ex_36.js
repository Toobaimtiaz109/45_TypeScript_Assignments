"use strict";
// Large T-Shirt..
let make_shirt = (size = "Large", message = "I love TypeScript") => {
    console.log(`Make a ${size}-size shirt printed a message " ${message} " on it.`);
};
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Dive into coding");

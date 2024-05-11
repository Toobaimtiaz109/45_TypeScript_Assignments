"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_great = void 0;
// Great Magicians..
const ex_40_1 = require("./ex_40");
// console.log("ex_41.ts\n");
let copy_of_magicians = [...ex_40_1.Magicians];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++)
        magicians[i] = magicians[i] + " the Great!";
    return magicians;
}
exports.make_great = make_great;
// make_great(copy_of_magicians);
console.log("Original Array:");
(0, ex_40_1.show_Magicians)(ex_40_1.Magicians);
console.log("Updated Array:");
(0, ex_40_1.show_Magicians)(copy_of_magicians);

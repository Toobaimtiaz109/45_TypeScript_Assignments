"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Unchanged Magicians..
const ex_41_1 = require("./ex_41");
const ex_40_1 = require("./ex_40");
let copy = [...ex_40_1.Magicians];
//if we send copy as argument then make_great will modify it and return it , we have to keep it original so pass clone
let newArr = (0, ex_41_1.make_great)([...copy]);
console.log("Original array");
(0, ex_40_1.show_Magicians)(copy);
console.log("Modified Array");
(0, ex_40_1.show_Magicians)(newArr);

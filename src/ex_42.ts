// // Unchanged Magicians..
import { make_great } from "./ex_41";
import { Magicians , show_Magicians } from "./ex_40";

let copy = [...Magicians];
//if we send copy as argument then make_great will modify it and return it , we have to keep it original so pass clone
let newArr = make_great([...copy]);
console.log("Original array");
show_Magicians(copy);
console.log("Modified Array");
show_Magicians(newArr);
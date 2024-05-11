"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_Magicians = exports.Magicians = void 0;
// Magicians..
let Magicians = ["magician1", "magician2", "magician3", "magician4"];
exports.Magicians = Magicians;
function show_Magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
exports.show_Magicians = show_Magicians;

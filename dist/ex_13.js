"use strict";
// Guest list..
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = ["Ali", "Abu Bakar", "Ibrahim", "Moiez"];
exports.guestList = guestList;
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} ,\nyou are cordially invited to dinner. It would be an honor to have you join us.\nThankyou.\n`);
}

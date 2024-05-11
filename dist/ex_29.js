"use strict";
// Hello admin..
let usernames = ["Admin", "Ali", "Hiader", "Hassan"];
if (usernames.includes("Admin")) {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log(`Hello ${usernames}, thank you for logging in again.`);
}

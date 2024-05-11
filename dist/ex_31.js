"use strict";
// Checking usernames..
let current_users = ["Admin", "Ali", "Hiader", "Hassan", "Tashfeen"];
let new_users = ["ALI", "Maham", "Tashfeen", "Hanan", "Muneeb"];
new_users.forEach(newusers => {
    if (current_users.some((currentusers) => currentusers.toLowerCase() == newusers.toLowerCase())) {
        console.log(`${newusers} will need to enter a new username.`);
    }
    else {
        console.log(`${newusers} is avaiable.`);
    }
});

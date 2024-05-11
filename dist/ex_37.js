"use strict";
// Cities..
let describe_city = (name, country = "Pakistan") => {
    console.log(`${name} is in ${country}.`);
};
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Arusha", "Tanzania");

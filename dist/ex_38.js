"use strict";
// City names.
let city_country = (name, country) => {
    return `"${name},${country}"`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));

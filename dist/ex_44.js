"use strict";
function car_info(manufacturer, model, ...args) {
    let car = { Manufacturer: manufacturer, Model: model, options: [] };
    for (let i = 0; i < args.length; ++i)
        car.options[i] = args[i];
    return car;
}
let myCar = car_info("Honda", "Civic 2022", {
    key: "colour",
    value: "blue",
}, {
    key: "availability",
    value: true,
}, { key: "mileage", value: 3245 });
console.log(myCar);

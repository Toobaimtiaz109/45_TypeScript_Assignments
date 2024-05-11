type Car = {
	Manufacturer: string;
	Model: string;
	//this allows arbitrary additional properties, key value pairs
	options: { key: string; value: any }[];
}
function car_info(
	manufacturer: string,
	model: string,
	...args: { key: string; value: any }[]
): Car {
	let car: Car = { Manufacturer: manufacturer, Model: model, options: [] };
	for (let i = 0; i < args.length; ++i) car.options[i] = args[i];
	return car;
}
let myCar: Car = car_info(
	"Honda",
	"Civic 2022",
	{
		key: "colour",
		value: "blue",
	},
	{
		key: "availability",
		value: true,
	},
	{ key: "mileage", value: 3245 }
);
console.log(myCar);
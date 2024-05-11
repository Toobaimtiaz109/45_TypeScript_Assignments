// Seeing the World..

let places : string[] = ["Maldives" , "Tanzania" , "Indonesia" , "New York" , "China"];
console.log("Original Array :" , places);
console.log("Sorted Array :", places.slice().sort()); //We use slice here because we want a copy array without changing our original array.
console.log("Original Array :" , places);
console.log("Reverse Alphabetical Array :" , places.slice().sort().reverse());
console.log("Original Array :" , places);
console.log("Reverse Array :" , places.reverse());
console.log("Again Reverse Array :" , places.reverse());
console.log("Again Sorted :" , places.sort());
console.log("Sorted Reverse Array :" , places.sort().reverse());

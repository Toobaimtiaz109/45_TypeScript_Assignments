// STRIPPING NAMES..

// with whitespaces..
let personName1 : string = "\t \n \n  Tooba Imtiaz \n"
console.log("Name with white spaces :" , personName1);

// without whitespaces..
let strippedName : string = personName1.trim() ;
console.log("Name without white spaces :" , strippedName);

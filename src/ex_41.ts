// Great Magicians..
import { Magicians , show_Magicians } from "./ex_40";
// console.log("ex_41.ts\n");

let copy_of_magicians = [...Magicians];
function make_great(magicians: string[]): string[] {
	for (let i = 0; i < magicians.length; i++)
		magicians[i] = magicians[i] + " the Great!";
	return magicians;
}
// make_great(copy_of_magicians);
console.log("Original Array:");
show_Magicians(Magicians);
console.log("Updated Array:");
show_Magicians(copy_of_magicians);


export { make_great };
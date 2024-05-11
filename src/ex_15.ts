//More Guests..


let guestlist : string[] = ["Ali" , "Ibrahim" , "Moiez" , "Tooba"];
console.log("Hey! We found a bigger dinner table." );
guestlist.unshift("Haider");
guestlist.splice(2 , 0 , "Kamran");
guestlist.push("Farah")
for (let i = 0; i < guestlist.length; i++){
    console.log(`Dear ${guestlist[i]} ,\nyou are cordially invited to dinner. It would be an honor to have you join us.\n Thankyou.\n` );}





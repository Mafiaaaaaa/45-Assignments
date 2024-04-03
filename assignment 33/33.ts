let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (let onenumber of numbers){
let newNumbers: string;

if (onenumber === "1"){
    newNumbers = "st"
}

else if (onenumber === "2"){
    newNumbers = "nd"
}

else if (onenumber === "3"){
    newNumbers = "rd"
}

else {newNumbers = "th"
}

console.log(`${onenumber}${newNumbers}`);
};

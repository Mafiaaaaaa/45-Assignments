function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function great_magicians(magician: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magicians = ["Mate", "Tate", "Nate"];

let theGreat_magicianss = great_magicians(magicians);

show_magicians(theGreat_magicianss);

//for printing all names in single line
console.log(theGreat_magicianss);

function show_magicians(magicians: string[]){
    return [magicians];
}

function copyarray(copy: string[]){
    return [...copy];
}

function great_magicians(magician: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magicians = ["Mate", "Tate", "Nate"];

let theGreat_magicianss = great_magicians(magicians);
console.log(theGreat_magicianss);
show_magicians(theGreat_magicianss);

let copymagician = copyarray(magicians);
console.log(copymagician);
great_magicians(copymagician);

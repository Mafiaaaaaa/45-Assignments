function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function great_magicians(magician) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians = ["Mate", "Tate", "Nate"];
var theGreat_magicianss = great_magicians(magicians);
show_magicians(theGreat_magicianss);
//for printing all names in single line
console.log(theGreat_magicianss);

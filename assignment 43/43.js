var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    return [magicians];
}
function copyarray(copy) {
    return __spreadArray([], copy, true);
}
function great_magicians(magician) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians = ["Mate", "Tate", "Nate"];
var theGreat_magicianss = great_magicians(magicians);
console.log(theGreat_magicianss);
show_magicians(theGreat_magicianss);
var copymagician = copyarray(magicians);
console.log(copymagician);
great_magicians(copymagician);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["Mount Everest", "Gilgit", "Turkiye", "SaudiArabia"];
console.log("original order", favPlaces);
console.log("Alphabetical order", __spreadArray([], favPlaces, true).sort());
console.log("again original order", favPlaces);
console.log("reverse order", __spreadArray([], favPlaces, true).reverse());
console.log("again original order", favPlaces);
console.log("now original is reversed", favPlaces.reverse());
console.log("now again original order", favPlaces.reverse());
console.log("now original in alphabetical order", favPlaces.sort());
console.log("now original is reversed again", favPlaces.reverse());

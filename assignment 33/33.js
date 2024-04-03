var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenumber = numbers_1[_i];
    var newNumbers = void 0;
    if (onenumber === "1") {
        newNumbers = "st";
    }
    else if (onenumber === "2") {
        newNumbers = "nd";
    }
    else if (onenumber === "3") {
        newNumbers = "rd";
    }
    else {
        newNumbers = "th";
    }
    console.log("".concat(onenumber).concat(newNumbers));
}
;

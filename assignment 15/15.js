var allGuests = ["Zaid", "Ali", "Faiz", "Umer"];
var notComing = allGuests[2];
console.log(notComing, "is not coming");
allGuests.splice(2, 3, "Fariz");
allGuests.forEach(function (newGuest) { return console.log("Hello ".concat(newGuest, ", you are invited for dinner")); });

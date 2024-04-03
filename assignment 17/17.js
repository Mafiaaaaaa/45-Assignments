var newguests = ["Zaid", "Ali", "Faiz", "Umer"];
var notComing = newguests[3];
console.log(notComing, "is not coming");
newguests.splice(3, 4, "Fariz");
console.log("Yessss! We found a bigger table for dinner.");
newguests.unshift("Sajid");
newguests.push("Sabeeh");
var middleName = (newguests.length / 2);
newguests.splice(middleName, 0, "Yousuf");
console.log("New guest list");
newguests.forEach(function (guest) { return console.log("Hello ".concat(guest, ", you are invited for dinner.")); });
console.log("Unfortunately, the new table wont arrive on time, so I can only invite two Guests for dinner");
while (newguests.length > 2) {
    var removeguests = newguests.pop();
    console.log("sorry, ".concat(removeguests, " I cant invite you to dinner"));
}
console.log("Now ".concat(newguests, ", you are still invited for dinner"));
console.log("ohh no! Sorry to say, that the dinner has been cancelled because of an emergency");
newguests.pop();
newguests.pop();
console.log("Sorry ".concat(newguests));
// confirmation of new guest list
console.log("printing new guest list again to see is there anyone in the list? ".concat(newguests, " no there is noone"));

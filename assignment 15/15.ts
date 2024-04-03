let allGuests = ["Zaid", "Ali", "Faiz", "Umer"];
let notComing = allGuests[2];
console.log(notComing, "is not coming");
allGuests.splice(2, 3, "Fariz");
allGuests.forEach(newGuest => console.log(`Hello ${newGuest}, you are invited for dinner` ));


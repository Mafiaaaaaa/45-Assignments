let newguests = ["Zaid", "Ali", "Faiz", "Umer"];
let notComing = newguests[3];
console.log(notComing, "is not coming");
newguests.splice(3, 4, "Fariz");
console.log("Yessss! We found a bigger table for dinner.");
newguests.unshift("Sajid");
newguests.push("Sabeeh");
let middleName = (newguests.length / 2);
newguests.splice(middleName, 0, "Yousuf");
console.log("New guest list");
newguests.forEach(guest => console.log(`Hello ${guest}, you are invited for dinner.`));
console.log("Unfortunately, the new table wont arrive on time, so I can only invite two Guests for dinner");
while(newguests.length > 2){
    let removeguests = newguests.pop();
    console.log(`sorry, ${removeguests} I cant invite you to dinner`);
}
console.log(`Now ${newguests}, you are still invited for dinner`);

console.log("ohh no! Sorry to say, that the dinner has been cancelled because of an emergency");
newguests.pop();
newguests.pop();
console.log(`Sorry ${newguests}`);
// confirmation of new guest list
console.log(`printing new guest list again to see is there anyone in the list? ${newguests} no there is noone`);


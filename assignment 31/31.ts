let userNames = ["Sparky", "Ozge", "Morkel", "Eric", "Admin", "Peter"];
// making an empty array to print msg for finding no users
userNames = [];

if (userNames.length == 0){
    console.log("We need to find some users!");
}
else{
userNames.forEach(user =>{
if (user == "Admin"){
    console.log(`Hey ${user}, would you like to see a status report?`);
}
else (console.log(`Hey ${user}, thankyou for logging in again.`));
})
}
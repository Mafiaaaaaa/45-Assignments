let currentUsers = ["Ozge", "John", "Sparky", "Andrew", "Tristan"];
let newUsers = ["Ozge", "Andrew", "Tate", "Donie", "Harry"];

newUsers.forEach(newUser => {
let ourCondition = currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
if (ourCondition){
    console.log(`Sorry ${newUser} is already taken.`)
}
else {
    console.log(`${newUser} is available.`)
}
});
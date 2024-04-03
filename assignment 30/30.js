"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Sparky", "Ozge", "Morkel", "Eric", "Admin", "Peter"];
userNames.forEach(user => {
    if (user == "Admin") {
        console.log(`Hey ${user}, would you like to see a status report?`);
    }
    else
        (console.log(`Hey ${user}, thankyou for logging in again.`));
});

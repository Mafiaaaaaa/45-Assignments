function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nI want Sandwiches with extra");
    return items.forEach(function (item) { return console.log("- " + item); });
}
Sandwiches("Mayo", "Chicken", "BBQ.");
Sandwiches("Perri perri", "Pepperoni", "Tuna.");
Sandwiches("Sauce", "Cheeze.");
// // Define a function named "makeSandwich" with a rest parameter to accept variable number of items
// function makeSandwich(...items) {
//     // Print a message indicating the start of making a sandwich
//     console.log("Making a sandwich with the following items:");
//     // Using For-Each-Loop to Iterate over each item in the "items" array and print them
//     items.forEach(item => console.log("- " + item));
// }
// // Call the "makeSandwich" function with different numbers of arguments
// makeSandwich('chicken', 'cheese', 'butter');             // Making a sandwich with chicken, cheese, and butter
// makeSandwich('egg', 'butter', "ketchup", "chicken");   // Making a sandwich with egg, butter, ketchup, and chicken
// makeSandwich('peanut butter', 'sauce');              // Making a sandwich with peanut butter and sauce

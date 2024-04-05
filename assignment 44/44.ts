function Sandwiches(...items:string[]){
    console.log("\nI want Sandwiches with extra");
    return  items.forEach(item => console.log("- " + item));
}
Sandwiches ("Mayo", "Chicken", "BBQ."); 
Sandwiches ("Perri perri", "Pepperoni", "Tuna.");
Sandwiches ("Sauce", "Cheeze.");


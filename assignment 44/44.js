function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return (items.forEach), console.log("\nI want Sandwich with extra ".concat(items));
}
Sandwiches("\n- Mayo", "\n- Chicken", "\n- BBQ.");
Sandwiches("\n- Perri perri", "\n- Pepperoni", "\n- Tuna.");
Sandwiches("\n- Sauce", "\n- Cheeze.");

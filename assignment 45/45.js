function carOne(manufacturer, model, color, keyless, insurance) {
    return {
        manufacturer: manufacturer,
        model: model,
        color: color,
        keyless: keyless,
        insurance: insurance,
    };
}
;
var order = carOne("Toyota", 2023, "Black", "No", true);
console.log(order);
//this is for testing undefined values
var ordertwo = carOne("Honda", 1960, "Blue");
console.log(ordertwo);

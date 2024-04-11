function carOne (manufacturer, model, ...options){
        let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    })
    return car;
};
let order = carOne("Buggati", "2024", "color:Copper", "Number_Plate:T8888");

console.log(order);



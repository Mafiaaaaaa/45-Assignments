type  car = {
    manufacturer:string,
    model:number,
    color:string,
    keyless:any,
    insurance:boolean
};

function carOne (manufacturer, model, color, keyless?, insurance?){
    return{
        manufacturer,
        model,
        color,
        keyless,
        insurance,
    }
};

let order:car = carOne("Toyota", 2023,"Black", "No", true);
console.log(order);

//this is for testing undefined values
let ordertwo:car = carOne("Honda", 1960, "Blue");
console.log(ordertwo);

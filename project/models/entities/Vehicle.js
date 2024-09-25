class Vehicle {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    getDetails(){
        return `El auto de la marca es: ${brand} y el modelo es: ${model}`
    }
        }
module.exports = Vehicle;
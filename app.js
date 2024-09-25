const { add, subtract, PI } = require('./mathOperations');
const vehicleController = require('./controllers/vehicleControlles')

console.log(`:5 + 3 = ${add(5, 3)}`);        
console.log(`subtract: 5 - 3 = ${subtract(5, 3)}`);   
console.log(`PI: ${PI}`);   
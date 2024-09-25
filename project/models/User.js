class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        return `Hola que tal ${name}`
    }
}
module.exports = User
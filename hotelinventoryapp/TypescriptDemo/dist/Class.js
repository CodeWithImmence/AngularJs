"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    Login() {
        return { name: "Visha", id: 1, email: "" };
    }
    //parameterized constructor
    constructor(id, name, address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    //class methods
    getNameWithAddress() {
        //using concatenation
        //return this.name + " " + this.address;
        //using without concatenation
        return `${this.name} stays at ${this.address}`;
    }
}
let emp = new Employee(1, "Vishal", "Main road");
let m = emp.getNameWithAddress();
// emp.id = 1;
// emp.name = "Vishal";
// emp.address = "Main road";
console.log(emp);
console.log(m);
//# sourceMappingURL=Class.js.map
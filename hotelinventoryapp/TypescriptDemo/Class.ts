import { login, User } from "./Interface";
class Employee implements login {
  Login(): User {
    return { name: "Vishal", id: 1, email: "" };
  }
  //default properties
  id: number;
  name: string;
  address: string;
  //parameterized constructor
  constructor(id: number, name: string, address: string) {
    this.name = name;
    this.id = id;
    this.address = address;
  }

  //class methods
  getNameWithAddress(): string {
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

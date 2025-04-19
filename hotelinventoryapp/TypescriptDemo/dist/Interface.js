"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name, email } = {
    name: "Vishal",
    age: 26,
    id: 1,
    email: "rajaivishal41@gmail.com",
};
let employee = {
    name: "Vishal",
    id: 1,
    email: "",
    age: 26,
    salary: 10000,
};
let [user1, user2, ...restUsers] = [
    { name: "Vishal", id: 1, email: "" },
    { name: "Vishal", id: 2, email: "" },
    { name: "Vishal", id: 3, email: "" },
    { name: "Vishal", id: 4, email: "" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter((user) => user.id > 2);
console.log(result);
//# sourceMappingURL=Interface.js.map
export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let { name, email }: User = {
  name: "Vishal",
  age: 26,
  id: 1,
  email: "rajaivishal41@gmail.com",
};

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: "Vishal",
  id: 1,
  email: "",
  age: 26,
  salary: 10000,
};

export interface login {
  Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
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

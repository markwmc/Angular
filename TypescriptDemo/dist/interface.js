"use strict";
//once compiled, all interfaces will be removed from js files. use classes for return types, not interfaces
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", age: 30, id: 1, email: " " };
let employee = { name: "john", id: 1, email: "", salary: 234 };
let [user1, user2, ...restUsers] = [
    {
        name: "John",
        email: "",
        id: 1,
    },
    {
        name: "Sandy",
        email: "",
        id: 2
    },
    {
        name: "Patrick",
        email: "",
        id: 3
    }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
//let result = restUsers.filter(user => user.id > 3);
// Decorators
//@Component({})
//class Component {
//   constructor(public name: string) {}
//}
//# sourceMappingURL=interface.js.map
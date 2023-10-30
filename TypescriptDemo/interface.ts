//once compiled, all interfaces will be removed from js files. use classes for return types, not interfaces

// Angular's documentation says to not use I before vars. IUser etc.
// adding ? makes it optional

export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "John", age: 30, id: 1, email: " " };

//user.name;
//user.email;

// object desctructuring
// let {name : userName, email: userLogin }: User = {name:"John", id: 1, email: " "};

// userLogin = "";

interface Employee extends User {
  salary: number;
}

let employee: Employee = { name: "john", id: 1, email: "", salary: 234 };

export interface Login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
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
console.log(restUsers)

//let result = restUsers.filter(user => user.id > 3);


// Decorators

//@Component({})
//class Component {
 //   constructor(public name: string) {}

//}
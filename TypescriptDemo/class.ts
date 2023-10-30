import { Login, User } from './interface'

//might show up as this in older code, but don't use this
// import * as UserLogin from './interface'
// need UserLogin.Login to work
// UserLogin.* etc


class EmployeeInformation implements Login {
  #id!: number;
  protected name!: string;
  address!: string;
  parkingSpot: string;
  office: number;
  static getEmployeeCount(): number {
    return 50;
  }

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }
  
  // private can still be assigned in constructor
  // private id:
  // # has to be manually assigned
  // #id: new way to create private vars

  constructor(
    id: number,
    name: string,
    address: string,
    parkingSpot: string,
    office: number
  ) {
    this.#id = id;
    this.name = name;
    this.address = address;
    this.parkingSpot = parkingSpot;
    this.office = office;
  }
    login(): User {
        throw new Error('Method not implemented.');
    }

  Login(): User {
   return { name: "John", age: 30, id: 1, email: " "}
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
    //return this.name + " " + this.address;
  }
}

let john = new EmployeeInformation(1, "John", "highway 81", "A5", 23);

john.empId = 100;

console.log(john.empId)

// EmployeeInformation.getEmployeeCount();

let address = john.getNameWithAddress();

console.log(address);

console.log(john);

// protected
// extend a class
class Manager extends EmployeeInformation {
  constructor(
    id: number,
    name: string,
    address: string,
    parkingSpot: string,
    office: number
  ) {
    super(id, name, address, parkingSpot, office);
  }
  getNameWithAddress(): string {
    return `${this.name} is manager at ${this.address}`;
  }
}

let newAddress = john.getNameWithAddress();
console.log(newAddress);

let mike = new Manager(2, "Mike", "Cherise Drive", "A1", 43);

console.log(mike);
console.log(mike.getNameWithAddress());

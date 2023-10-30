"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmployeeInformation_id;
Object.defineProperty(exports, "__esModule", { value: true });
//might show up as this in older code, but don't use this
// import * as UserLogin from './interface'
// need UserLogin.Login to work
// UserLogin.* etc
class EmployeeInformation {
    // private can still be assigned in constructor
    // private id:
    // # has to be manually assigned
    // #id: new way to create private vars
    constructor(id, name, address, parkingSpot, office) {
        _EmployeeInformation_id.set(this, void 0);
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
        this.name = name;
        this.address = address;
        this.parkingSpot = parkingSpot;
        this.office = office;
    }
    static getEmployeeCount() {
        return 50;
    }
    get empId() {
        return __classPrivateFieldGet(this, _EmployeeInformation_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
    }
    login() {
        throw new Error('Method not implemented.');
    }
    Login() {
        return { name: "John", age: 30, id: 1, email: " " };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
        //return this.name + " " + this.address;
    }
}
_EmployeeInformation_id = new WeakMap();
let john = new EmployeeInformation(1, "John", "highway 81", "A5", 23);
john.empId = 100;
console.log(john.empId);
// EmployeeInformation.getEmployeeCount();
let address = john.getNameWithAddress();
console.log(address);
console.log(john);
// protected
// extend a class
class Manager extends EmployeeInformation {
    constructor(id, name, address, parkingSpot, office) {
        super(id, name, address, parkingSpot, office);
    }
    getNameWithAddress() {
        return `${this.name} is manager at ${this.address}`;
    }
}
let newAddress = john.getNameWithAddress();
console.log(newAddress);
let mike = new Manager(2, "Mike", "Cherise Drive", "A1", 43);
console.log(mike);
console.log(mike.getNameWithAddress());
//# sourceMappingURL=class.js.map
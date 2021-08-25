"use strict";
/* const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`; */
Object.defineProperty(exports, "__esModule", { value: true });
/*interface Human {
  name: string;
  age: number;
  gender: string;
} */
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("yummy", 22, "female");
/*const person = {
  name: "yummy",
  age: 22,
  gender: "female"
};*/
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
// console.log(sayHi("Nicolas", 24, "male"));
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map
/* const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`; */
  interface Human {
    name: string;
    age: number;
    gender: string;
  } 
  
  const person = {
    name: "yummy",
    age: 22,
    gender: "female"
  };
  
  const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${
      person.gender
    }!`;
  };
  
  // console.log(sayHi("Nicolas", 24, "male"));
  console.log(sayHi(person));
  
  export {};
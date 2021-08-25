/* const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`; */

  /*interface Human { //interface는 js 코드에선 보이지 않는다(Ts의 특성!)
    name: string;
    age: number;
    gender: string;
  } */

  class Human {
      public name: string; //Ts에선 private으로 관리 : 외부 속성에 노출 방지 가능!
      public age: number;
      public gender: string;
      constructor(name: string, age: number, gender: string){
          this.name=name;
          this.age=age;
          this.gender=gender;
      }
  }

  const lynn = new Human("yummy",22,"female");
  
  /*const person = {
    name: "yummy",
    age: 22,
    gender: "female"
  };*/
  
  const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${
      person.gender
    }!`;
  };
  
  // console.log(sayHi("Nicolas", 24, "male"));
  console.log(sayHi(lynn));
  
  export {};
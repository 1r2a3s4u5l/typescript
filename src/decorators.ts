//=========================== Class Decoration============================
// const logClass = (cons: Function) => {
//   console.log("Class:", cons);
// };

// @logClass //Decoratorni chaqirish
// class User {
//   constructor(public name: string, public age: number) {}

//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }
// ==================Property Decoration =================
// const logProperty = (target:Object,propertyKey:string | symbol) =>{
//     console.log(propertyKey); //Natija : "secret"
//     console.log(target.constructor);//Natija : "class User"

// }
// class User {
//     @logProperty
//     secret:number;

//     @logProperty
//     yosh:number

//     constructor(
//         public name:string,
//         public age:number,
//         secret:number,
//         yosh : number
//     ) {
//         this.secret = secret
//         this.yosh = yosh
//     }
//     public getPass() {
//         return `${this.name}${this.age}`
//     }
// }
// ==========Method decoration
// const logMethod = (
//   target: Object,
//   propertyKey: string | symbol,
//   description: PropertyDescriptor
// ) => {
//   console.log(
//     "propertyKey:",
//     propertyKey,
//     "\nterget",
//     target.constructor,
//     "\ndescription",
//     description
//   ); //Natija : "getPass"
// };
// class User {
//   constructor(public name: string, public age: number) {}
//   @logMethod
//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }
// ========================get/set Decoration ==================
// const logSet = (
//   target: Object,
//   propertyKey: string | symbol,
//   description: PropertyDescriptor
// ) => {
//   console.log(
//     "propertyKey:",
//     propertyKey,
//     "\nterget",
//     target.constructor,
//     "\ndescription",
//     description
//   ); //Natija : "Myage"
// };
// class User {
//   constructor(public name: string, public age: number) {}
//   @logSet
//   set MyAge(age: number) {
//     this.age = age;
//   }
//   get MyAge() {
//     return this.age;
//   }
// }
// =============Factory Decoration=================
function factory(value: any) {
  // Factory
  return function (target: any) {
    // Decoration
    console.log(target); //Decoration logic
  };
}
// ==============Amlada Factory Decoration==================
// const ChangeEnumerable = (value: boolean) => {
//   return (
//     target: Object,
//     propertyKey: string | symbol,
//     description: PropertyDescriptor
//   ) => {
//     console.log(
//       "propertyKey:",
//       propertyKey,
//       "\nterget",
//       target.constructor,
//       "\ndescription",
//       description
//     );
//   };
// };
// class User {
//   constructor(public name: string, public age: number) {}
//   @ChangeEnumerable(false)
//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }
// ==============Amlada Factory Decoration==================
const first = () => {
    console.log("first() called");
  return (
    target: any,
    propertyKey: string | symbol,
    description: PropertyDescriptor
  ) => {
    console.log("first() completing");
  };
};
const second = () => {
    console.log("second() called");
  return (
    target: any,
    propertyKey: string | symbol,
    description: PropertyDescriptor
  ) => {
    console.log("second() completing");
  };
};
class User {
  constructor(public name: string, public age: number) {}

  @first()
  @second()
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}
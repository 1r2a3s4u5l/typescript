//  Boolean
const isActive: boolean = true;
const isMale: boolean = false;
const isBook = true; // literal type
let isNumber = true;
let isNumber1: boolean;

// Number
const num: number = 5;
const PI: number = 3.14;
let bir = 1;
let ikki: number = 2;

// String
const lang: string = "TypeScript";
let str = "Salom";
let str1: string;

// ConCat
let num2 = "7";
let c = num + num2;
let summa = num + Number(num2);
console.log(typeof c);
console.log(c);
console.log(summa);

// Any
let myVar: any = 5;
myVar = "sds";
myVar = true;

let myVar2 = myVar as number;
let myVar3 = <number>myVar;

myVar2 = 7;

console.log(myVar2);
console.log(typeof myVar2);

// Array
const numArray: number[] = [1, 2, 3, 4, 5];
const numArray1: Array<number> = [1, 2, 3, 4];
const numArray2 = [1, 2, 3, 4];
let numArray3 = [1, 2, 3, 4];

const numString: string[] = ["Salom", "xayr"];
const numString1: Array<string> = ["Salom", "xayr"];
let numString2: Array<string> = ["Salom", "xayr"];

// Tuple
const host: [string, number] = ["localhost", 3000];
console.log(host);

const address: [string, number, ...boolean[]] = [
  "Toshkent",
  12,
  true,
  true,
  false,
];

// Alias
type Son = number;
let son1: Son = 2;

type Login = string;
const login: Login = "superuser";

// Union type
type StrNum = string | number;
const strnumArray: StrNum[] = [1, 2, "as", 2];

let sdArray = [1, 2, 3, 4, "sa", "as", 77];
const sdArray1: any = [1, 2, 3, 4, "sa", "as", 77];
sdArray.push(7);
sdArray1.push(true);

type Mytype = string | null | undefined;

let my1: Mytype;
my1 = undefined;
my1 = null;

let userID: StrNum = 5;

function printID(id: StrNum) {
  if (typeof id == "number") {
    console.log(id * 2);
  } else {
    console.log(id.toLocaleLowerCase());
  }
}

function getUser(user: string | string[]): string[] | string {
  if (Array.isArray(user)) {
    console.log(user.join(", "));
    return user;
  } else {
    console.log(user);
    return user;
  }
}

getUser(["admin", "user", "superadmin"]);
getUser("user");

function salomlashish(name: string): void {
  console.log("Salom", name);
}
salomlashish("Karim");
// number
function sum(a: number, b: number): number {
  return a + b;
}

// never
function myError(message: string): never {
  throw new Error(message);
}

function cheksiz(): never {
  while (true) {
    console.log("salom");
  }
}

// literal type
// const a2 = "ikki"
let a1: "bir" = "bir";
a1 = "bir";

type AdminAction = "CREATE" | "ACTIVATE" | "DEACTIVATE";

function doAction(action: AdminAction) {
  switch (action) {
    case "CREATE":
      return 1;
    case "ACTIVATE":
      return 2;
    case "DEACTIVATE":
      return 3;
    default:
      throw new Error("Bu bajarilmasligi kerak");
  }
}

doAction("ACTIVATE");

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
function move(direction: Direction) {
  return direction;
}
move("LEFT");
move("RIGHT");

// object types
type LatLon = { lat: number; lon: number };
const myCoordinate: LatLon = { lat: 4, lon: 7 };

console.log("Coor", myCoordinate);

// interface
interface ICoord {
  lat: number;
  lon: number;
}

function check(coord: ICoord) {}

interface Imushuksimon {
  name: string;
  age?: number;
}

interface Ipishak extends Imushuksimon {
  color: string;
  isTail?: boolean;
}

interface Ipishak {
  isHomeAnimal: boolean;
}

const myPishak: Ipishak = {
  name: "Mallavoy",
  color: "malla",
  isTail: true,
  isHomeAnimal: true,
};

myPishak.age = 2;
myPishak.color = "Qora";
console.log(myPishak.name);
console.log(myPishak);

type Animal = {
  name: string;
  age?: number;
};

type Cat = Animal & {
  color: string;
  tail?: boolean;
};

const myCat: Cat = {
  name: "Qoravoy",
  color: "Qora",
  age: 12,
};

interface IRect {
  readonly lineWidth: number;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}
const rect1: IRect = {
  lineWidth: 2,
  size: {
    width: 30,
    height: 20,
  },
};
rect1.color = "blue";
rect1.size.width = 50;

interface IRectArea extends IRect {
  getArea: () => number;
}

const rect2: IRectArea = {
  lineWidth: 2,
  size: {
    width: 30,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

console.log(rect2.getArea());

interface IStyle {
  [key: string]: string | number;
}

const css: IStyle = {
  border: "3px solid red",
  borderRedius: "5px",
  borderGround: "Red",
  color: "Yellow",
  line: 2,
};

interface IConnection {
  host: string;
  port: number;
}

function connect(connection: IConnection | "default") {
  if (connection == "default") {
    console.log(connection);
  } else {
    console.log(connection);
  }
}

connect({ host: "localhost", port: 233 });
connect("default");

// ENUM
enum Direction1 {
  Up,
  Down = 7,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

Direction1.Right;
Direction2.Left;

enum Users {
  user,
  admin,
  superuser,
}

console.log(Users.admin);
console.log(Users[1]);

// ===============function============
interface IPosition {
  x: number;
  y: number;
}
function position(): IPosition;
function position(a: number): IPosition;
function position(a: number, b: number): IPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    console.log("Salim");
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined };
  }
  return { x: a, y: b };
}
position();

// ==============generic==========
function myLog(mes: string | number): string | number {
  console.log(mes);
  return mes;
}

myLog(3);
myLog("satr");
// myLog(true)

function myLog1<T>(mes: T): T {
  console.log(mes);
  return mes;
}
myLog1<string>("satr");
myLog1<number>(23);
myLog1<boolean>(true);
// ---------------------
function myLog2<P, K>(mes: P, arr: K[]): K[] {
  console.log(mes);
  return arr;
}

myLog2(true, [12, 121]);
console.log(myLog2<string, number>("Salom", [12, 121]));
// ========Amalda=======
interface ILength {
  length: number;
}
function myLog3<T extends ILength, K>(password: T, arr: K[]): K[] {
  if (password.length < 10) console.log(password.length);
  return arr;
}
myLog3<string, number>("Salomlar", [1, 2]);
// myLog3(true,[1,2])

myLog3([1, 2, "salom"], [1, 2]);
// myLog3(2,[1,2])

// ==========Amalda=========
const Numbers: Array<number> = [1, 2, 3];
const Numbers1: number[] = [1, 2, 3];
const Strings: Array<string> = ["1", "2", "3"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(Numbers));
console.log(reverse(Numbers1));
console.log(reverse(Strings));

// ========Amalda===========
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("OK");
  }, 2000);
});
promise.then((data) => {
  console.log(data.toLowerCase());
});
// =====Amalda=========
// function mergeObj(obj1:object,obj2:object){
//   return Object.assign({},obj1,obj2)
// }
// function mergeObj<T, K>(obj1:T,obj2:K){
//   return Object.assign({},obj1,obj2)
// }
function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
  return Object.assign({}, obj1, obj2);
}

const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
const mergeObj2 = mergeObj({ type: "rectangle" }, { area: 100 });
const mergeObj3 = mergeObj({ model: "BMW" }, { speed: 280 });

console.log(mergeObj1.user);
console.log(mergeObj3.speed);

// ========typeof=======
let s1 = "Salom";

let s2: typeof s1;

// ========keyof=====
type Coord = {
  lat: number;
  lon: number;
};

type P = keyof Coord;

let a5: P = "lat";
let b5: P = "lon";
// -----------
interface ICoord1 {
  lat: number;
  lon: number;
}
type P1 = keyof ICoord;
let key: P1;
key = "lat";
key = "lon";

// =========generic keyof amalda =====
type User = {
  _id: number;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
};

type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserNoMeta2 = Pick<User, "name" | "email" | "password">;

let user1: UserNoMeta1 = "name";
let user2: UserNoMeta2 = {
  name: "Admin",
  email: "admin@mail.uz",
  password: "12345",
};

// =========generic keyof amalda =====
const person = {
  name: "Salim",
  age: 33,
};
const car = {
  model: "Hundai",
  marka: "Solaris",
  color: "white",
};
console.log(getObjValue(person, "name"));
console.log(getObjValue(person, "age"));
console.log(getObjValue(car, "model"));
console.log(getObjValue(car, "color"));

function getObjValue<O extends object, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

// ===========
function log(a: string | null) {
  // if(a!==null){
  //   return a.toLowerCase()
  // }
  // return a
  return a!.toLowerCase(); //aniq string bo'lsa
}
// console.log(log(null));
// ===========
const big: bigint = BigInt(1000);

console.log(big);

const sym1: symbol = Symbol("ID");
const sym2: symbol = Symbol("ID");

console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);

// =================CLASS===============
// class Bags {
//   readonly name: string;
//   color: string;
//   readonly material: string;
//   price: number;

//   constructor(name: string, color: string, material: string, price: number) {
//     this.name = name;
//     this.color = color;
//     this.material = material;
//     this.price = price;
//   }
//   info() {
//     return `${this.name} - ${this.price}`;
//   }
// }

// const bag1 = new Bags("Dracon", "metallic", "dracon-teri", 7000);

// console.log(bag1.info());

// // ------------
// class NewStyleBags {
//   color: string;
//   price: number;

//   constructor(readonly name: string, color: string, readonly material: string, price: number) {
//     this.color = color;
//     this.material = material;
//   }
//   info() {
//     return `${this.name} - ${this.price}`;
//   }
// }
// ----------
// class NewStyleBags {
//   constructor(
//     readonly name: string,
//     public color: string,
//     readonly material: string,
//     public price: number
//   ) {}
//   info() {
//     return `${this.name} - ${this.price}`;
//   }
// }

// =======================
class Millat{
  constructor(
    public name:string,
    protected tili:string,
    private _dini:string,
    private _age:number
  ) {}
  set age(newAge:number){
    this._age=newAge
  }
  get age(){
    return this._age
  }
  set dini(religious:string){
    this._dini = religious
  }
  get dini(){
    return this._dini
  }
  about(){
    return `Millati: ${this.name}, tili: ${this.tili}`
  }
}
class Uzbek extends Millat {
  public history: string;

  constructor(name: string, age: number, tili: string, dini: string, history: string) {
    super(name, age, tili, dini);
    this.history = history;
  }

  public setLang(lang: string) {
    this.tili = lang;
  }

  override about() {
    return `${super.about()}, dini: ${this.dini}, tarixi: ${this.history}`;
  }
}


const uzbek = new Uzbek("Uzbek",23,"uzbek","Islom","Buyuk")
uzbek.setLang("Uzbek tili")
uzbek.dini = "Islom dini"
console.log(uzbek.dini);
uzbek.age = 44


console.log(uzbek.about());

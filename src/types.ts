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


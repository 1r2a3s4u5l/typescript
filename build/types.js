const isActive = true;
const isMale = false;
const isBook = true;
let isNumber = true;
let isNumber1;
const num = 5;
const PI = 3.14;
let bir = 1;
let ikki = 2;
const lang = "TypeScript";
let str = "Salom";
let str1;
let num2 = "7";
let c = num + num2;
let summa = num + Number(num2);
console.log(typeof c);
console.log(c);
console.log(summa);
let myVar = 5;
myVar = "sds";
myVar = true;
let myVar2 = myVar;
let myVar3 = myVar;
myVar2 = 7;
console.log(myVar2);
console.log(typeof myVar2);
const numArray = [1, 2, 3, 4, 5];
const numArray1 = [1, 2, 3, 4];
const numArray2 = [1, 2, 3, 4];
let numArray3 = [1, 2, 3, 4];
const numString = ["Salom", "xayr"];
const numString1 = ["Salom", "xayr"];
let numString2 = ["Salom", "xayr"];
const host = ["localhost", 3000];
console.log(host);
const address = [
    "Toshkent",
    12,
    true,
    true,
    false,
];
let son1 = 2;
const login = "superuser";
const strnumArray = [1, 2, "as", 2];
let sdArray = [1, 2, 3, 4, "sa", "as", 77];
const sdArray1 = [1, 2, 3, 4, "sa", "as", 77];
sdArray.push(7);
sdArray1.push(true);
let my1;
my1 = undefined;
my1 = null;
let userID = 5;
function printID(id) {
    if (typeof id == "number") {
        console.log(id * 2);
    }
    else {
        console.log(id.toLocaleLowerCase());
    }
}
function getUser(user) {
    if (Array.isArray(user)) {
        console.log(user.join(", "));
        return user;
    }
    else {
        console.log(user);
        return user;
    }
}
getUser(["admin", "user", "superadmin"]);
getUser("user");
function salomlashish(name) {
    console.log("Salom", name);
}
salomlashish("Karim");
function sum(a, b) {
    return a + b;
}
function myError(message) {
    throw new Error(message);
}
function cheksiz() {
    while (true) {
        console.log("salom");
    }
}
let a1 = "bir";
a1 = "bir";
function doAction(action) {
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
function move(direction) {
    return direction;
}
move("LEFT");
move("RIGHT");
const myCoordinate = { lat: 4, lon: 7 };
console.log("Coor", myCoordinate);
function check(coord) { }
const myPishak = {
    name: "Mallavoy",
    color: "malla",
    isTail: true,
    isHomeAnimal: true,
};
myPishak.age = 2;
myPishak.color = "Qora";
console.log(myPishak.name);
console.log(myPishak);
const myCat = {
    name: "Qoravoy",
    color: "Qora",
    age: 12,
};
export {};
//# sourceMappingURL=types.js.map
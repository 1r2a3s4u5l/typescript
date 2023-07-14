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
const rect1 = {
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
};
rect1.color = "blue";
rect1.size.width = 50;
const rect2 = {
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
console.log(rect2.getArea());
const css = {
    border: "3px solid red",
    borderRedius: "5px",
    borderGround: "Red",
    color: "Yellow",
    line: 2,
};
function connect(connection) {
    if (connection == "default") {
        console.log(connection);
    }
    else {
        console.log(connection);
    }
}
connect({ host: "localhost", port: 233 });
connect("default");
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 7] = "Down";
    Direction1[Direction1["Left"] = 8] = "Left";
    Direction1[Direction1["Right"] = 9] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
Direction1.Right;
Direction2.Left;
var Users;
(function (Users) {
    Users[Users["user"] = 0] = "user";
    Users[Users["admin"] = 1] = "admin";
    Users[Users["superuser"] = 2] = "superuser";
})(Users || (Users = {}));
console.log(Users.admin);
console.log(Users[1]);
function position(a, b) {
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
function myLog(mes) {
    console.log(mes);
    return mes;
}
myLog(3);
myLog("satr");
function myLog1(mes) {
    console.log(mes);
    return mes;
}
myLog1("satr");
myLog1(23);
myLog1(true);
function myLog2(mes, arr) {
    console.log(mes);
    return arr;
}
myLog2(true, [12, 121]);
console.log(myLog2("Salom", [12, 121]));
function myLog3(password, arr) {
    if (password.length < 10)
        console.log(password.length);
    return arr;
}
myLog3("Salomlar", [1, 2]);
myLog3([1, 2, "salom"], [1, 2]);
const Numbers = [1, 2, 3];
const Numbers1 = [1, 2, 3];
const Strings = ["1", "2", "3"];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(Numbers));
console.log(reverse(Numbers1));
console.log(reverse(Strings));
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("OK");
    }, 2000);
});
promise.then((data) => {
    console.log(data.toLowerCase());
});
function mergeObj(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
const mergeObj2 = mergeObj({ type: "rectangle" }, { area: 100 });
const mergeObj3 = mergeObj({ model: "BMW" }, { speed: 280 });
console.log(mergeObj1.user);
console.log(mergeObj3.speed);
let s1 = "Salom";
let s2;
let a5 = "lat";
let b5 = "lon";
let key;
key = "lat";
key = "lon";
let user1 = "name";
let user2 = {
    name: "Admin",
    email: "admin@mail.uz",
    password: "12345",
};
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
function getObjValue(obj, key) {
    return obj[key];
}
function log(a) {
    return a.toLowerCase();
}
const big = BigInt(1000);
console.log(big);
const sym1 = Symbol("ID");
const sym2 = Symbol("ID");
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);
class Millat {
    constructor(name, tili, _dini, _age) {
        this.name = name;
        this.tili = tili;
        this._dini = _dini;
        this._age = _age;
    }
    set age(newAge) {
        this._age = newAge;
    }
    get age() {
        return this._age;
    }
    set dini(religious) {
        this._dini = religious;
    }
    get dini() {
        return this._dini;
    }
    about() {
        return `Millati: ${this.name}, tili: ${this.tili}`;
    }
}
class Uzbek extends Millat {
    constructor(name, age, tili, dini, history) {
        super(name, age, tili, dini);
        this.history = history;
    }
    setLang(lang) {
        this.tili = lang;
    }
    about() {
        return `${super.about()}, dini: ${this.dini}, tarixi: ${this.history}`;
    }
}
const uzbek = new Uzbek("Uzbek", 23, "uzbek", "Islom", "Buyuk");
uzbek.setLang("Uzbek tili");
uzbek.dini = "Islom dini";
console.log(uzbek.dini);
uzbek.age = 44;
console.log(uzbek.about());
export {};
//# sourceMappingURL=types.js.map
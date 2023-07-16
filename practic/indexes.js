// 1-masala
console.log("1-masala");
function swap(a, b) {
    console.log("a=", a);
    console.log("b=", b);
    var c = a;
    a = b;
    b = c;
    console.log("a=", a);
    console.log("b=", b);
}
swap(1, 5);
// 2-masala
console.log("2-masala");
function assertString(str) {
    if (typeof str != "string") {
        throw new Error("string malumot kiriting");
    }
    else {
        console.log("Siz to'g'ri kiritdingiz");
    }
}
assertString("1");

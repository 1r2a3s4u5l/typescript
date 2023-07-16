// 1-masala
console.log("1-masala");
function swap<S>(a: S, b: S): void {
  console.log("a=", a);
  console.log("b=", b);
  let c = a;
  a = b;
  b = c;
  console.log("a=", a);
  console.log("b=", b);
}
swap(1, 5);
// 2-masala
console.log("2-masala");
function assertString(str: any): void {
  if (typeof str != "string") {
    throw new Error("string malumot kiriting");
  } else {
    console.log("Siz to'g'ri kiritdingiz");
  }
}
assertString("1");

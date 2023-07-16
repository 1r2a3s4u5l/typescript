// ==========ReadOnly========================
// interface IUser {
//     name:string
//     pass?:string
// }

// const user:Readonly<IUser>={
//     name:"Admin",
//     pass:"qwerty"
// }

// user.name="SuperUser" //Xato
// user.pass="12345" //cannot assign to 'pass' because it is a read-only property.

// =======================Required===============

// interface IRect {
//     width?:number
//     height?:number
// }

// const rect:IRect = { width:10}// OK 👍
// const rect2:Required<IRect> = {width:10}:
// //property 'height' is missing in type 👎

// ==================Partial

// interface IRect {
//     width:number
//     height:number
// }

// const rect:IRect = { width:10} //property 'height' is missing in type 👎
// const rect2:Partial<IRect> = {width:10} // OK 👍

// ===============Record<K, T>=============

type Record<K extends string, T> = {
  [P in K]: T;
};

type WwwConfig = Record<
  "port" | "domain" | "root" | "is_active",
  string | number | boolean
>;
// type WwwConfig = Partial<Record<
//     "port" | "domain" | " root" | "is_active",
//     string | number | boolean
// >>;

let wwwConfig: WwwConfig = {
  domain: "https://domain.com",
  port: 80,
  root: true,
  is_active: true,
};

// ---------------------------------------------
interface PageInfo {
  title: string;
}

type Page = "home" | "product" | "about";

const pages: Record<Page, PageInfo> = {
  about: { title: "about" },
  product: { title: "product" },
  home: { title: "home" },
};

// =======================Exlude
type User = {
  _id: number;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
};

type Kerakli = "name" | "email" | "password" | "isActive";

type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserNoMeta2 = Exclude<
  keyof User,
  "name" | "email" | "password" | "isActive"
>;

type UserNoMeta3 = Pick<User, "name" | "email" | "password">;
type UserNoMeta4 = Omit<User, "_id" | "createdAt">;

//  ========================NonNull

type Type1 = NonNullable<string | null | number | undefined>;

// +==================Parametrs<T>================
function func<T>(
  p0: T,
  p1: number,
  p2: string,
  p3?: boolean,
  p4: object = {}
) {}

type FunctionParams = Parameters<typeof func>;

// +==================ConstructorParametrs<T>================
class Myclass<T> {
  constructor(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {}
}

type ClassParams = ConstructorParameters<typeof Myclass>;

// ==============Awaited<T>====================
// A=string
type A = Awaited<Promise<string>>;
type A1 = Awaited<string>;

// B=string
type B = Awaited<Promise<Promise<string>>>;

// c = string | number | null | undefined
type C = Awaited<string | Promise<number> | null | number | undefined | string>;

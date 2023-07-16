const SECRET: string = "123321";
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;

// Es5 Module
(function () {
  const SECRET: string = "123321";
  const PI: number = 3.14;

  const getPass = (name: string, age: number): string => `${name}${age}`;

  const isEmpty = <T>(data: T): boolean => !data;
});

// Define namespace
namespace Utils {
  const SECRET: string = "123321";
  const PI: number = 3.14;

  const getPass = (name: string, age: number): string => `${name}${age}`;

  const isEmpty = <T>(data: T): boolean => !data;
}
// Export data from Namespace
namespace Utils {
  export const SECRET: string = "123321";
  const PI: number = 3.14;

  const user = "Salim";

  export const getPass = (name: string, age: number): string => `${name}${age}`;

  export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass("Salim", 31); //Salim31
const isSecret = Utils.isEmpty(Utils.SECRET); //false

namespace Aylana {
  const PI: number = 3.14;
  export const getArea = (r: number): number => PI * r * r;
}
const aylana1 = Aylana.getArea(5);

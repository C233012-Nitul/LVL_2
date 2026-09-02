// array , object

let fruits: string[] = ["apple", "banana", "orange"];
let mix: (string | number)[] = [1, "eggs", "milk", 2];

mix.push(3);
mix.push("bread");
console.log(mix);

let coordinate: [number, number] = [10, 20];
let couple: [string, string] = ["John", "Doe"];
let nameAndRoll: [string, number] = ["John", 123];
let des: [string, string, number] = ["John", "Doe", 123];

//object, reference
const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried?: boolean;
  admin: "always"; //value initialization(literal type)
  readonly id?: number; //readonly property
} = {
  firstName: "Mohammad",
  middleName: "Ali",
  lastName: "nitul",
  isMarried: false,
  admin: "always",
  id: 123,
};
user.firstName = "John";
// user.admin = "always 2";
console.log(user);

//object des
const user = {
  id: 123,
  name: {
    firstName: "mohammad",
    middleName: "ali",
    lastName: "nitul",
  },
  gender: "male",
  favColor: "blue",
};
//basic --
//const midname = user.name.middleName;
user.favColor = "black";
//new typescript
const {
  favColor: newCol,
  name: { middleName: midName },
} = user;
console.log(midName);
console.log(newCol);

const arr = ["mohammad", "ali", "nitul", 1, 2, 3];
const [a, secondName, c, d, e, f] = arr;
// same ...first a skip korte , , last a skip a kisu lagbe na
//const [x, secondname] = arr;

console.log(secondName);

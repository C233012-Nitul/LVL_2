// ? :ternary operator
// ?? : nullish coalescing : only null/undefined valuer jonno
// ?. optional chaining

//! ternary
const userAge = 21;
const marryAge = (a: number) => {
  //   if (a >= 21) {
  //     console.log("can");
  //   } else {
  //     console.log("no");
  //   }
  const res = a >= 21 ? console.log("can") : console.log("no");
  return res;
};
marryAge(23);

//! nullish
const userTheme = undefined;
const selectedTheme = userTheme ?? "blue";

const userTheme1 = "black";
const selectedTheme1 = userTheme1 ?? "blue";

console.log(selectedTheme);
console.log(selectedTheme1);

//! 1 and 2
const isAuth = "";
const resTernary = isAuth ? isAuth : "guest";
const resNull = isAuth ?? "meme";
console.log({ resTernary, resNull });

const isAuth1 = "admin";
const resTernary1 = isAuth1 ? isAuth1 : "guest";
const resNull1 = isAuth1 ?? "guest";

console.log({ resTernary1, resNull1 });

//! optional chain
const user: {
  add: {
    city: string;
    town: string;
    postal?: string;
  };
} = {
  add: {
    city: "ctg",
    town: "chittagong",
    postal : '123'
  },
};
const postalCode = user?.add?.postal;
console.log(postalCode);

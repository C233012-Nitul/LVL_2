function sum(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => {
  return a + b;
};

//object a function

const poorUser = {
  name: "nitul",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

poorUser.addBalance(100);

const arr: number[] = [1, 2, 3, 4, 5];
const sqrArr = arr.map((ele: number) => ele * ele);
console.log(sqrArr);
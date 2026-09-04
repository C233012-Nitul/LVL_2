//! nullable type
const user = (input: string | null) => {
  if (input) {
    console.log(`User ${input}`);
  } else {
    console.log("No user");
  }
};
user("nitul");
user(null);

//!unknown

const productDis = (input: unknown) => {
  //console.log(`total input ${input}`);
  if (typeof input === "number") {
    const disPrice = input * 0.1;
    console.log(disPrice);
  } else if (typeof input === "string") {
    // const splited = input.split(" ");
    // console.log(splited);
    const [disPrice] = input.split(" ");
    console.log(Number(disPrice) * 0.1);
  } else {
    console.log("NO Discount");
  }
};
productDis(100);
productDis("200 tk");
productDis(null);

//! void
const throwError = (msg : string) : never =>{
    throw new Error(msg);
}
throwError('Error...')

//spread

const frnd = ["sachin", "saurabh", "prashant", "shubham"];

const newfrnd = ["nitul", "ali"];

// const allfrnd = [...frnd, ...newfrnd];
const allfrnd = [];
//allfrnd a push arekta array
allfrnd.push(...frnd);
console.log(allfrnd);

const user = {
  name: "nitul",
  phone: "0123456789",
};
const otherInfo = {
  hobby: "cricket",
  address: "ctg",
};
//2ta object spread/marge
const newUser = { ...user, ...otherInfo };
console.log(newUser);
//normal arrow
const sendInvite = (frnd1: string, frnd2: string, frnd3: string) => {
  //console.log(`Hi ${frnd1}, ${frnd2}and ${frnd3} you are invited`);

};

sendInvite("nitul", "ali", "sachin");
//rest use
const sendin = (...frnds : string[]) => {
    //console.log(`Hi ${frnds.join(", ")} you are invited`);
    frnds.forEach((fnrd : string) =>{
        console.log(`Hi ${fnrd} you are invited`);
    })
}
sendin("nitul", "ali", "sachin", "prashant", "shubham", 'meme');
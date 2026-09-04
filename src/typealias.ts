//defining type
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contInfo: string;
  address: {
    division: string;
    city: string;
  };
};

//type aliasing
const user1: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "nitul",
  },
  gender: "male",
  contInfo: "012",
  address: {
    division: "ctg",
    city: "chittagong",
  },
};
//normal way
const user2: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contInfo: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 1234,
  name: {
    firstName: "Mrs",
    lastName: "ali",
  },
  gender: "female",
  contInfo: "012345",
  address: {
    division: "dhk",
    city: "dhaka",
  },
};

// function
type AddFunc = (num1: number, num2: number) => number;
const sum: AddFunc = (a, b) => a + b;
console.log(sum(5, 6));

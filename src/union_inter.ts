//union |
type Userrole = "admin" | "user" | "guest";
const getdesh = (role: Userrole) => {
  if (role === "admin") {
    return "Admin Deshboard";
  } else if (role === "user") {
    return "USER Deshboard";
  } else {
    return "guest";
  }
};

getdesh("guest");

//intersection
type Emp = {
  name: string;
  id: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamName: string;
  teamSize: number;
};

type Employemanager = Emp & Manager;

const sakib: Employemanager = {
  id: "123",
  name: "nitul",
  phoneNo: "123",
  designation: "Manager",
  teamName: "opp",
  teamSize: 12,
};


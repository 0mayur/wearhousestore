import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "email@example.com",
    password: bcrypt.hashSync("123456", 10), //here 10 is salt value means password string must be 10 character long
    isAdmin: true,
  },
  {
    name: "john Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jack Parmar",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

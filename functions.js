const Axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    Axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

//https://jsonplaceholder.typicode.com/users/1

module.exports = functions;

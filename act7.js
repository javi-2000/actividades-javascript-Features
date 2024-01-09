const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const {id, ...moreInfo} = person
console.log(id, moreInfo);
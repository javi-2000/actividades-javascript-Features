const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};


const {id, age} = person;
const newPerson = {id, age};
const json = JSON.stringify(newPerson);
console.log(json); // Should return: { "id": 1, "age": 25 }

//ALTERNATIVA
const filteredPerson = {id : person.id, age: person.age};
JSON.stringify(filteredPerson);
console.log(filteredPerson);
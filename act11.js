const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

//spread operator crea una copia independiente del objeto pero NO de los objetos anidados en este -> son referenciados
//se puede hacer copia profunda de persona1 con métodos JSON
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = "Milan";

//1º convierte el objeto en una cadena con stringify y después se reconvierte la cadena en un nuevo objeto con parse

console.log(person1);
console.log(person2);

/*Así se crea una copia completamente independiente, incluyendo objetos anidados.
Así, modificar persona2 no afectará a persona1*/
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(parameter) {
    const parsedJson = JSON.parse(parameter);
    const { id, firstName, lastName, age } = parsedJson;
    return new Person(id, firstName, lastName, age);
  }
}
//IMPORTANTE: los métodos static pueden ser llamado en la propia clase, no así los NO static, que solo pueden ser llamados por una INSTANCIA

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

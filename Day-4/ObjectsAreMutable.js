const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const X = person;

X.age = 10;

console.log(person.age);
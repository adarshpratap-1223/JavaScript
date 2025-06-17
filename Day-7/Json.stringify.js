const person = {
    name: "Adarsh",
    age:25,
    city: "New York"
};
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
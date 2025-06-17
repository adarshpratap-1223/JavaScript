const person = {
    name: "Adarsh",
    age:25,
    city: "Motihari"
};

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
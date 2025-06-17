const Person = {
    name:"Adarsh",
    age:25,
    city: "Motihari"
};

let text = "";
for(let X in Person){
    text += Person[X]+ " ";
};

document.getElementById("demo").innerHTML = text;
const Person = {
    firstName: "Adarsh",
    lastName: "Pratap",
    id:5566,
    fullName: function(){
        return this.firstName +  " " + this.lastName;
    }
}

let name = Person.fullName();
console.log(name);
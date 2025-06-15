const person = {
    firstName:"Adarsh",
    lastName:"Pratap",
    fullName: function myFunction(){
        return this.firstName + " " + this.lastName;
    }
}

// Adding New Properties
person.Nationality = "Indian";

console.log(person.Nationality);
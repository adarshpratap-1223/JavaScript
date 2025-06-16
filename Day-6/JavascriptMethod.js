const Person = {
    firstName:"Adarsh",
    lastName:"Pratap",
    id:556
};

Person.name = function(){
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(Person.name());
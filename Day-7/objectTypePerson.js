function person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
};

const Details = new person("Adarsh","Pratap",25,"black");
console.log(Details);
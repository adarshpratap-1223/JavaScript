function person (first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
};

const myMother = new person("sally","rally",48,"black");

myMother.changeName = function(name){
    this.lastName = name;
};

myMother.changeName("doe");

document.getElementById("demo").innerHTML =
"My mother name is:"+ " "  + myMother.lastName;
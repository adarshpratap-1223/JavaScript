function person (first,last,age,eyeColor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.fullName = function (){
        return this.firstName + " " + this.lastName;
    };
};

const myMother = new person("Puspa","Devi",45,"Black");

document.getElementById("demo").innerHTML =
"My Mother Name is :" + " " + myMother.fullName();
function person (fullName,age,eye){
    this.fullName = fullName;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian";
}

const myFather = new person("Ramjay Pratap",58,"black");

document.getElementById("demo").innerHTML = "My Father Name is" + " "+ myFather.fullName + " " + "his age is"+ " " + myFather.age + " " + "and eye Color is" + " " + myFather.eyeColor + " " + "and nationality is" + " " + myFather.nationality;
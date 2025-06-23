let text = "Adarsh pratap";
const myArray = text.split("");
text = "";
for(let i = 0; i<myArray.length; i++){
    text += myArray[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
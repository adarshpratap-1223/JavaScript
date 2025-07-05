const Fruits = ["Banana","Orange","Apple","Mango"];
let flen = Fruits.length;
let text = "<ul>"
for(let i = 0; i < flen; i++){
    text += "<li>" + Fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
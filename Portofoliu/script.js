// Cache the DOM
var button = document.getElementById("button");
var nume = document.getElementById("nume");
var prenume = document.getElementById("prenume");
var educatie = document.getElementById("educatie");
var asteptari = document.getElementById("asteptari");
var img = document.getElementById("rounded-img");
var body = document.querySelector("body");

// Event listener
button.addEventListener("click", Altaviata);

// Function
function Altaviata() {
    nume.innerHTML = "Software Engineer";
    prenume.innerHTML = "Apple";
    educatie.innerHTML = "Experiente";
    asteptari.innerHTML = "<ul><li>Libertate Financiara</li><li>Educatie Superioara</li></ul>";

    body.style.backgroundImage = "url('images/field.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.backgroundAttachment = "fixed";

    body.style.color = "yellow";
    body.style.fontFamily = "Montserrat";

    img.src = "images/lion.jpg";
    img.style.opacity = "70%";
    img.style.width = "200px";
    img.style.height = "300px";
    img.style.border = "3px solid black";
}

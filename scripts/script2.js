/*
            --- Modifier le DOM ---
*/
// variable = document.selecteur(...)
// variable.transformation

// selecteur
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

// Evenement
button1.addEventListener("click", button1function);
button2.addEventListener("click", button2function);
button3.addEventListener("click", button3function);
button4.addEventListener("click", button1function);
button5.addEventListener("click", button1function);

// variable
let counterButton1 = 0;

// fonction ajoute une classe et l'enleve
function button1function() {
  if (counterButton1 == 0) {
    button1.classList.add("selectButton1");
    return (counterButton1 = 1);
  }
  if (counterButton1 == 1) {
    button1.classList.remove("selectButton1");
    return (counterButton1 = 0);
  }
}
// fonction ajoute du contenu
function button2function() {
  console.log("kdhflkdh");
}
function button3function() {
  console.log("kdhflkdh");
}
function button4function() {
  console.log("kdhflkdh");
}
function button5function() {
  console.log("kdhflkdh");
}

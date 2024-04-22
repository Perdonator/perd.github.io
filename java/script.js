const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
        myBox.style.backgroundColor = "red";
        myBox.textContent = "ouch 😡";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
        myBox.textContent = "DONT DO IT 🤨";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
        myBox.textContent = "click me 😊";
});
alert("JavaScript is working");

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

function buttonClicked(event) {
    if(event.target.textContent==="CLR"){
        screen.textContent=""
    }
    else{

        screen.textContent += event.target.textContent;
    }
}
// for each loop is added because js does not automatically adds eventlistner to each button so we do it mmanually using for each
buttons.forEach(button => {
    button.addEventListener("click", buttonClicked);
});
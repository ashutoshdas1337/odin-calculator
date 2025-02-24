alert("JavaScript is working");

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

function buttonClicked(event) {
    if(event.target.textContent==="CLR"){
        screen.textContent=""
    }
    else if(event.target.textContent==="="){
        let str=screen.textContent
// this replace helps to replace all occurences of x to  * 
        let a=str.replace(/x/g,"*")
// eval is used inplace of parseInt because parse int converts only the first occurence of a string to int for eg:-parseInt(12+24) then only 12 will be parsed to int and 12 will be parsed to int and 24 will be ignored. so we use eval. however eval is not secure becuase hackers can use it to inject malicous contnent in code 
 a=eval(a)
 console.log(a)
screen.textContent=a
// screen.textContent=eval(a)
}
    else{

        screen.textContent += event.target.textContent;
    }
}
// for each loop is added because js does not automatically adds eventlistner to each button so we do it mmanually using for each
buttons.forEach(button => {
    button.addEventListener("click", buttonClicked);
});
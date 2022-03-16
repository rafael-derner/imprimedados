
document.body.style.border = "5px solid red";

let centerDiv = document.body.getElementsByTagName("center");
let printButton = document.createElement("input");
printButton.setAttribute("value", "Imprimir");
printButton.setAttribute("type", "submit");
printButton.setAttribute("class", centerDiv[1].children[1].getAttribute("class"));

console.log(centerDiv[1].children[1].getAttribute("class"));

centerDiv[1].appendChild(printButton);
document.getElementById("count-element").innerText = 0;
document.getElementById("myButton").innerHTML = "Increase";
let counterDisplay = document.getElementById("count-element").innerText;
let clickElement = document.getElementById("myButton").innerHTML;
// alert (counterDisplay);
clickElement.addEventListener("click", incrementFunc);
function incrementFunc() {
    counterDisplay = 1;
};
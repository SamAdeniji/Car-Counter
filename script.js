const countDisplay = document.getElementById("count-element");
const clickElement =  document.getElementById("myButton");
document.getElementById("myButton").addEventListener("click", incrementFunc());

let display = countDisplay.innerHTML
function incrementFunc() {
    // document.getElementById("text-item").innerText
    display++;
};


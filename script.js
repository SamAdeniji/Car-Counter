let countElement = document.getElementById("count-element");
let count = 0
// let clickElement = document.getElementById("myButton");
clickElement.addEventListener("click", incrementFunc());
function incrementFunc() {
   countElement.innerHTML = count++;
};
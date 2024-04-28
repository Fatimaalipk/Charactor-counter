
const charVal = document.getElementById("textarea");

let totalCount = document.getElementById("total-counter");
 let remainingCount = document.getElementById("remaining-counter");
let Char = 0;
 const updateCounter = () => {
 userChar = charVal.value.length;
remainingCount.innerText = 150 - userChar;
totalCount.innerHTML = userChar;
 }
 charVal.addEventListener("keyup", () => updateCounter());


 // copy the text code

 const copytext = () => {
    charVal.select();
    charVal.setSelectionRange(0,9999) // mobile
    navigator.clipboard.writeText(charVal.value);
 }
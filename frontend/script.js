
// console.log the value of the input as you type

const inputField = document.getElementById("inputField");

inputField.addEventListener("input", function(event) {
  console.log("Input field value changed to:", event.target.value);
});
const colourTextInput = document.getElementById("colour");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");
const ulEL = document.getElementById("ul-el");
const error = document.getElementById("error");
let colours = JSON.parse(localStorage.getItem("colours")) || [];

function errorMessage(userInputString, message) {
  if (userInputString === "") {
    error.textContent = message;
    return;
  }
}

function handleReset() {
  const ulELContent = ulEL.innerHTML;
  errorMessage(ulELContent, "No Items to be deleted");

  colours = [];
  localStorage.clear();
  displayColours();
  ulEL.innerHTML = "";
}
function handleSubmit() {
  ulEL.innerHTML = "";
  //Step 1: Get the value from the input field
  let colour = colourTextInput.value.trim();
  //STEP 2: Validate the input
  errorMessage(colour, "Please enter a valid colour");
  //STEP 3: Storing the input value
  colours.push(colour);
  localStorage.setItem("colours", JSON.stringify(colours));
  //STEP 4: Displaying the array
  displayColours();
  //STEP 5 Reset the Input Field
  colourTextInput.value = "";
}

function displayColours() {
  for (let i = 0; i < colours.length; i++) {
    // const li = document.createElement("li");
    // li.textContent = colours[i]
    // ulEL.append(li)
    ulEL.innerHTML += `<li> ${colours[i]} </li>`;
  }
}

displayColours();

// console.log("Hello Akeel");
// console.log("Hello Alex");
// console.log("Hello Sumit");
// console.log("Hello Esmat");

// function greetUser(userName) {
//   console.log(`Hello ${userName}`);
//   console.log(`I hope you are having a great day ${userName}`);
//   console.log(`Goodbye ${userName}`);
// }

addButton.addEventListener("click", function () {
  handleSubmit();
});

resetButton.addEventListener("dblclick", function () {
  handleReset();
});

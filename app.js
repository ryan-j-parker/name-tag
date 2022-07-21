// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



// setting variables for name input, name button, and name field
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-btn');
const nameDiv = document.getElementById('name');

// setting variables for pronouns input, pronouns button, and pronouns field
const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-btn');
const pronounDiv = document.getElementById('pronouns');

// setting variables for city input, city button, and city field
const cityInput = document.getElementById('city-input');
const cityButton = document.getElementById('city-btn');
const cityDiv = document.getElementById('city');

// setting variables for color
const colorInput = document.getElementById('color-input');
const colorButton = document.getElementById('color-btn');

// setting variables for top and bottom
const topDiv = document.getElementById('top');
const bottomDiv = document.getElementById('bottom');

// set event listener for the button
nameButton.addEventListener('click', () => {
  const value = nameInput.value;
  nameDiv.textContent = value;
  console.log(value);
});

pronounButton.addEventListener('click', () => {
  const value = pronounInput.value;
  pronounDiv.textContent = value;
  console.log(value);
});

cityButton.addEventListener('click', () => {
  const value = cityInput.value;
  cityDiv.textContent = value;
  console.log(value);
});

colorButton.addEventListener('click', () => {
  const value = colorInput.value;
  topDiv.style.backgroundColor = value;
  bottomDiv.style.backgroundColor = value;
  console.log(value);
});
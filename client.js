const beforeString =
  "World Of Warcraft Classic: Season of Discovery Part 2 is now live!";
const beforeNumber = 42069;
const beforeArray = [1, 2, 3, 4];
const beforeObject = {
  name: "Thunderfury, Blessed Blade of the Windseeker",
  rarity: "Legendary",
};

const beforeStringElement = document.getElementById("before-string");
const beforeNumberElement = document.getElementById("before-number");
const beforeArrayElement = document.getElementById("before-array");
const beforeObjectElement = document.getElementById("before-object");

beforeStringElement.textContent = `String: ${beforeString}`;
beforeNumberElement.textContent = `Number: ${beforeNumber}`;
beforeArrayElement.textContent = `Array: ${beforeArray}`;
beforeObjectElement.textContent = `Object: ${JSON.stringify(beforeObject)}`;

// After values
let afterValues = [];
afterValues.push(Number.isNaN(beforeNumber)); // Check if a "number" is actually a number with Number.isNaN()
afterValues.push(beforeNumber + 1); // Increment or decrement a number using ++/—
afterValues.push(beforeString.length); // Show the number of characters in your string with String.length
afterValues.push(beforeString.charAt(0)); // Show the first character of your string
const filteredArray = beforeArray.filter((num) => num > 1); // Return only specific elements of an array with .filter() or .find()
afterValues.push(...filteredArray);
afterValues.push(beforeArray.includes(2)); // Verify if elements exist in an array with .includes(), .every(), or .some()
afterValues.push(...Object.values(beforeObject)); // Create and log an array of the values of your object with Object.values()
const frozenObject = Object.freeze(beforeObject); // Reduce an object’s editability with Object.freeze() or Object.seal()

const afterValuesElement = document.querySelector(".after-values");

afterValuesElement.innerHTML = "";

afterValues.forEach((value) => {
  const p = document.createElement("p");
  p.textContent = `Value: ${value}`;
  afterValuesElement.appendChild(p);
});

// Using const
const PI = 3.14;
// Attempting to reassign a const variable will cause an error
// PI = 3.14159; // Error: Assignment to constant variable

// Using let
let radius = 5;
// We can reassign a let variable without any errors
radius = 7;

// Output the radius
const outputDiv = document.getElementById("output");
outputDiv.innerHTML += "<p>The radius is: " + radius + "</p>";

// We can declare a let variable without initializing it, and assign it later
let diameter;
diameter = radius * 2;

// Output the diameter
outputDiv.innerHTML += "<p>The diameter is: " + diameter + "</p>";


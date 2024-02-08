# CPNT-262 Mini Activity

Assignment Name: Before and After

Author Name: Hendrich Buhrer

GH Pages Link: https://hbuhrer.github.io/CPNT262-Mini-Activity-2/

This project demonstrates how to use client-side JavaScript to manipulate HTML elements.

## Files

- `index.html`: HTML file that imports `client.js` and displays JavaScript variables on the page.
- `client.js`: JavaScript file containing the logic for before and after values and an example of the use of `const` and `let`.
- `README.md`: This file providing instructions and overview of the project.

## Setup

To run the project, simply open `index.html` in a web browser.

## Content Requirements

### Before Values
- A string, number, array, and object are displayed before any modifications.

### After Values
- Ten values are displayed after modifications including:
  - Check if a "number" is actually a number with `Number.isNaN()`.
  - Increment or decrement a number using `++`/`—`.
  - Show the number of characters in a string with `String.length`.
  - Show the first character of a string with `String.charAt(0)`.
  - Return only specific elements of an array with `.filter()`.
  - Verify if elements exist in an array with `.includes()`.
  - Create and log an array of the values of an object with `Object.values()`.
  - Reduce an object’s editability with `Object.freeze()` or `Object.seal()`.

### Modifications
- **Number**:
  - Check if a "number" is actually a number with Number.isNaN()
  - Incremented using `++`.
- **String**: 
  - Show the number of characters in your string with String.length
  - Show the first character of your string
- **Array**: 
  - Return only specific elements of an array with .filter() or .find()
  - Verify if elements exist in an array with .includes(), .every(), or .some()
- **Object**: 
  - Create and log an array of the values of your object with Object.values()
  - Reduce an object’s editability with Object.freeze() or Object.seal()

### CSS Styling
- Added a CSS file `styles.css` for styling the layout.

## Const vs Let Example

Added an example demonstrating the difference between `const` and `let` in JavaScript. Refer to the `index.html` and `client.js` files for the example implementation.

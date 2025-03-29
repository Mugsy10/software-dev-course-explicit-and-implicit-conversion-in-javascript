/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Works due to implicit conversion
let result = "5" - 2;
console.log("The result is: " + result); 

// "false" (as a non-empty string) is truthy, so this block will run
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
// Fix not needed here.


// This line causes a bug because it performs string concatenation, not addition
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); 

// Used Number() to explicitly convert age from a string to a number

// Implicit Type Conversion Example
let implicitConversion = "10" * 2;
console.log("Implicit result:", implicitConversion);        
console.log("Type of result:", typeof implicitConversion);  

// The * operator triggers implicit conversion from string to number

// Explicit Type Conversion Example with Edge Case
let edgeCase = undefined;
let convertedValue = Number(edgeCase);
console.log("Converted value:", convertedValue);        
console.log("Type of converted value:", typeof convertedValue);  

// undefined cannot be directly converted to a valid number




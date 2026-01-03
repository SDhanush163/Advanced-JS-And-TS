let word1 = "Hello";
let word2 = "World";
const fullName1 = word1 + " " + word2; // Not efficient if too many variables need to be concatenated
const fullName2 = `${word1} ${word2}`;
console.log({ fullName1, fullName2 });

// -----------------------------------------------------------
// Perform JS operations within the string literal
// -----------------------------------------------------------
let num1 = 2;
let num2 = 5;
const newConst = `${num1 + num2} ${word2}`;
console.log(newConst);

// -----------------------------------------------------------
// Simplified multiline constant
// -----------------------------------------------------------
const example = `Line 1 - ${word1} ${word2}
Line 2 - ${num1} + ${num2} = ${num1 + num2}`;

document.getElementById("example").innerText = example;

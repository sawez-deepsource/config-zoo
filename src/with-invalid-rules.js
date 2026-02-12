// Standard JS file for testing rule application
function hello() {
  var name = "world"; // no-var
  return "Hello " + name;
}

// Array constructor
const arr = new Array(10); // no-array-constructor

// Empty catch
try {
  hello();
} catch (e) {} // no-empty

// Nested ternary
const value = true ? (false ? 1 : 2) : 3; // no-nested-ternary

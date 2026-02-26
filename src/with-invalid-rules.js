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

// === v3 DIFF TEST — new code below ===

// no-new-wrappers
const wrappedBool = new Boolean(false);
const wrappedStr = new String("test");

// no-proto
function getParent(child) {
    return child.__proto__;
}

// no-iterator
function legacyIter(obj) {
    obj.__iterator__ = function() { return this; };
    return obj;
}

// no-octal
const octalVal = 071;

// no-self-compare
function isNaNCheck(x) {
    return x === x;
}

export { wrappedBool, wrappedStr, getParent, legacyIter, octalVal, isNaNCheck };

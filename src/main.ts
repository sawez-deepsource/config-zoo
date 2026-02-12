// Tests basic rule detection with .eslintrc.cjs config
var x = 1; // no-var
let unused = "hello"; // no-unused-vars (turned off in config - should NOT flag)
const val = 42;

if (val == 42) { // eqeqeq (warn in config)
  console.log("loose"); // no-console (off in config - should NOT flag)
}

eval("bad code"); // no-eval

function duplicate(a: number, b: number) {
  return a + b;
}

MY_CUSTOM_GLOBAL.doSomething(); // should NOT error - defined in globals
__DEV__ && console.log("debug"); // should NOT error - defined in globals

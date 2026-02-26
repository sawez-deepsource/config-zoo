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

// === v3 DIFF TEST — new code below ===

// no-shadow — val shadows outer val
function outerFn() {
    const val = "outer";
    function innerFn() {
        const val = "inner";
        return val;
    }
    return innerFn() + val;
}

// no-return-assign
function setAndReturn(obj: any) {
    return obj.value = 42;
}

// prefer-template
function buildUrl(host: string, port: number): string {
    return "http://" + host + ":" + port + "/api";
}

// no-useless-concat
const combined = "foo" + "bar";

// no-multi-str
const multiline = "this is a \
long string that spans \
multiple lines";

export { outerFn, setAndReturn, buildUrl, combined, multiline };

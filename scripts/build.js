// Script file - tests override rules for scripts/**/*.js
const fs = require("fs");
var x = "no-var issue";

// process.exit should be allowed per overrides
process.exit(0);

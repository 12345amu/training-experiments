const path = require("path");

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

var pathObj = path.parse(__filename);

console.log(pathObj);
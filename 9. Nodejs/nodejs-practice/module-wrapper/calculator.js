(function (exports, require, module, __filename, __dirname) {
    console.log("Calculator module loaded");

    console.log("File Path:", __filename);
    console.log("Directory Path:", __dirname);

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    module.exports = { add, multiply };
})(exports, require, module, __filename, __dirname);

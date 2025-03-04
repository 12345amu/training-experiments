const fs = require('fs');
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

fs.readdir("module-wrapper", function (err, files) {
    if (err) {
        console.log("Error reading directory:", err);
    } else {
        console.log(" Files in 'module-wrapper':", files);
    }
});

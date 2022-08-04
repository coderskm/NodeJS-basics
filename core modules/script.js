console.log("welcome to NodeJS"); // global modules
console.log("directory name:-",__dirname)
console.log("file name:-",__filename)

const fs = require('fs') // non global modules
fs.writeFileSync("begin.txt", "learn backend tech like NodeJS, ExpressJS and MongoDB");

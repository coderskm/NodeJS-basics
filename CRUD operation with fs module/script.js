const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname);
const filepath = `${dirPath}/text.txt`;
// fs.writeFileSync(filepath, "simple text"); // create

// // read
// fs.readFile(filepath, 'utf-8', (err, item) => {
//     console.log(item)
// })

// // update
// fs.appendFile(filepath, ' and file name is text.txt', (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// })

// rename

fs.rename(filepath, `${dirPath}/rename.txt`, (err) => {
    if (!err) {
        console.log("file renamed")
    }
})
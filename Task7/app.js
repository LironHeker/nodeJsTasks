// Liron Heker + Alex Dovbush
const { createFiles, copyFiles } = require("./module");

const files = ["1.txt", "2.txt", "3.txt"];

createFiles();
copyFiles(files);

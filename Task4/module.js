// Liron Heker + Alex Dovbush
const fs = require("fs");
const { random } = require("mathjs");
const path = require("path");

// function that creates 10 text files with random amount of lines each file
function createFiles(count = 10) {
  const dir = path.join(__dirname, "text");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (let i = 1; i <= count; i++) {
    const letter = String.fromCharCode(96 + i);
    fs.writeFileSync(path.join(dir, `${i}.txt`), `${letter}1\n`);
    var rnd = [Math.floor(Math.random() * 10)];
    for (let j = 2; j <= rnd; j++) {
      fs.appendFileSync(path.join(dir, `${i}.txt`), `${letter}${j}\n`);
    }
  }
}

// function that creats output text file and copy from each text file from previous func the amount of lines -
// like the exercise asks
function copyFiles(files, outputName = "result.txt") {
  const dir = path.join(__dirname, "text");
  let result = "";

  files.forEach((file, index) => {
    const lines = fs
      .readFileSync(path.join(dir, file), "utf8")
      .split("\n")
      .filter((line) => line !== ""); // מסיר שורה ריקה בסוף הקובץ

    const taken = lines.slice(0, index + 1); // קובץ n → עד n שורות
    if (taken.length) result += taken.join("\n") + "\n";
  });

  fs.writeFileSync(path.join(__dirname, outputName), result);
}

module.exports = { createFiles, copyFiles };

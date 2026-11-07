// Liron Heker + Alex Dovbush
const fs = require("fs");
const { random, index } = require("mathjs");
const path = require("path");

//function that creates 10 text files with random amount of lines each file
function createFiles(count = 3) {
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

function copyFiles(files, outputName = "res.txt") {
  const dir = path.join(__dirname, "text");
  const allLines = []; // לכל קובץ – מערך השורות שלו

  files.forEach((file) => {
    const lines = fs
      .readFileSync(path.join(dir, file), "utf8")
      .split("\n")
      .filter((line) => line !== "");
    allLines.push(lines);
  });

  let output = "";
  let start = 0;
  let i = 1;
  let added = true;

  while (added) {
    added = false;
    for (let f = 0; f < allLines.length; f++) {
      for (let j = start; j < start + i && j < allLines[f].length; j++) {
        output += allLines[f][j] + "\n";
        added = true;
      }
    }
    start += i;
    i++;
  }

  fs.writeFileSync(path.join(__dirname, outputName), output);
}

module.exports = { copyFiles, createFiles };

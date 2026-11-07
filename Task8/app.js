// Liron Heker + Alex Dovbush
const fs = require("fs");
const path = require("path");

// 1. קריאת הקובץ והמרה מטקסט לאובייקט
const data = fs.readFileSync(path.join(__dirname, "users.json"), "utf8");
const users = JSON.parse(data);

// 2. ספירת המשתמשים
const count = users.length;

// 3. איסוף השמות
let names = "";
for (let i = 0; i < users.length; i++) {
  names += users[i].name + "\n";
}

// 4. כתיבת מספר המשתמשים
fs.writeFileSync(path.join(__dirname, "user_count.txt"), String(count));

// 5. כתיבת השמות
fs.writeFileSync(path.join(__dirname, "user_names.txt"), names);

console.log("Users:", count);
console.log(names);

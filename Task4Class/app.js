const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./templates/page.html");
const aboutPage = readFileSync("./templates/about.html");
const contactPage = readFileSync("./templates/contactUs.html");
const homeStyles = readFileSync("./styles/index.css");
const bookImage = readFileSync("./images/book.jpg");
const homeLogic = readFileSync("./scripts/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  // home page
  if (url === "/" || url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  }
  // contact page
  else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactPage);
    res.end();
  }
  // styles
  else if (url === "/index.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // image
  else if (url === "/book.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(bookImage);
    res.end();
  }
  // browser logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

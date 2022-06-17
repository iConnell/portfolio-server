const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./public/index.html");
const aboutPage = fs.readFileSync("./public/about.html");
const contactPage = fs.readFileSync("./public/contact.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end(homePage);
  } else if (url === "/home") {
    res.end(homePage);
  } else if (url === "/about") {
    res.end(aboutPage);
  } else if (url === "/contact") {
    res.end(contactPage);
  } else {
    res.end("404 Page not found");
  }
});

server.listen(8000);

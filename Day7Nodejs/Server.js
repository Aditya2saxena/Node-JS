const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const requestUrl = req.url;
  console.log("request", requestUrl);

  const requestMethod = req.method;
  console.log("requestmethod", requestMethod);

  const logContent = `URL: ${requestUrl}`;

  fs.writeFile("log.txt", logContent, (err) => {
    if (err) console.log(err);
  });

  if (requestUrl === "/") {
    res.end("hello world");
  }
  else if (requestUrl === "/home") {
    res.end("Home page");
  }
  else if (requestUrl === "/about") {
    res.end("about page");
  }
  else {
    res.end("404 Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

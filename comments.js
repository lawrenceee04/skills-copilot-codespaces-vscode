// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// Use the fs module to read the comments.html file and send it as a response to the client.

// Run the server using node comments.js and visit http://localhost:3000 in your web browser.

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("comments.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
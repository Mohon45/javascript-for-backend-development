// // thare are 3 type of module in node js
// //1. Local Module
// //2. Core Module
// //3. third party Module

// // local module
// const { add } = require("./other");
// const res = add(2, 3);

// // console.log(res);

// // Core modules
// const http = require("http");

// const server = http.createServer(function (req, res) {
//   //   console.log(`a`);
// });

// // server.listen(5000);

// //third party module //underscore
// const _ = require("underscore");

// var stooges = [
//   { name: "moe", age: 40 },
//   { name: "larry", age: 50 },
//   { name: "curly", age: 60 },
// ];
// const result = _.pluck(stooges, "name");

// console.log(result);

// row node js dia amader first server create kora
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // res.end("Hello Node.JS");
  // if (req.url == "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<p> This is Home Page. <p/>");
  //   res.end();
  // } else if (req.url == "/contact") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<p> This is Cantact Page. <p/>");
  //   res.end();
  // } else if (req.url == "/about") {
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.write(
  //     JSON.stringify({
  //       course: "Complete web Development with Jhankar mahbub.",
  //     })
  //   );
  //   res.end();
  // }

  // exploring url module

  const address_url =
    "http://localhost:5000/contact?name=mohon&country=bangladesh";
  const parsed_url = url.parse(address_url, true);
  const quearyObject = parsed_url.query;
  // console.log(quearyObject);

  // exploring file system module
  if ((req.url = "/")) {
    //asyncronouse readfile
    // fs.readFile("data.txt", (error, data) => {
    //   if (error) {
    //     res.write("Failed to Read Data!!!");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // });

    //syncronouse readfile
    // const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end();

    fs.writeFile("data.txt", "Hello node.js", (error) => {
      if (error) {
        res.write("Data failed to Write");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    });
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server is Runnging at ${PORT}`);

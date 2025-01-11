// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// const dataObject = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview") {
//     res.end("This is OVERVLEW!");
//   } else if (pathName === "/product") {
//     res.end("This is PRODUCT");
//   } else if (pathName === "/api") {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(data);
//   } else {
//     res.writeHead(404);
//     res.end("Page not found!");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });

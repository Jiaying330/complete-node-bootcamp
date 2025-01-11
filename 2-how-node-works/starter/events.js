const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();
myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer name: jonas");
});

myEmitter.on("newSale", (count) => {
  console.log("item count:", count);
});
myEmitter.emit("newSale", 9);

const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request received");
  res.end("request received");
});
server.on("request", (req, res) => {
  // console.log("request received 2");
  console.log("request received 2");
});
server.on("close", (req, res) => {
  console.log("server close");
});

server.listen(8000, () => {
  console.log("waiting for request");
});

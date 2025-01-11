const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });

  // STREAMS
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   })

  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.pipe(res);
});

server.listen(8000, () => {
  console.log("server starts..");
});

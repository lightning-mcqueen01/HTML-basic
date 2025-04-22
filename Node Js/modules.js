// OS module
const os = require("os");
const { uptime } = require("process");

const userInfo = os.userInfo();
console.log(userInfo);

const userCPU = os.cpus();
console.log(userCPU);

const osInfo = {
  name: os.hostname(),
  uptime: os.uptime(),
  freeSpace: os.freemem(),
  totalSpace: os.totalmem(),
};

console.log(osInfo);

// FS module
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("first.txt", "UTF-8");
const second = readFileSync("second.txt", "UTF-8");

writeFileSync("result.txt", `Here is the synced file : ${first}, ${second}`, {
  flag: "a",
});

// http module

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true).query;
  let contentType = "text/html";
  res.writeHead(200, { "content-type": contentType });

  if (contentType === "text/html") {
    res.write(q.year + " " + q.month);
  } else if (contentType == "application/json") {
    res.write(JSON.stringify({ message: "Welcome to the Earth" }));
  }

  // res.write("hello this is http server");
  res.end();
});

server.listen(5000);

// path module

const path = require("path");
console.log(path.sep);

const filePath = path.join("/content/", "subContent", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subContent", "text.txt");
console.log(absolute);

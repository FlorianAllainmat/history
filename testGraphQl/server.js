const express = require("express");

const server = express();

server.use("/", () => {
  console.log("Le serveur est en place");
});
server.listen(4000, () => {
  console.log("server connect port:4000");
});

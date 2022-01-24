const express = require("express");
const server = express();
const path = require("path");

server.use(express.static(path.join(__dirname, "static")));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
    res.render("index.ejs");
})

server.listen(3001, () => {
    console.log("Listening in port 3000");
});
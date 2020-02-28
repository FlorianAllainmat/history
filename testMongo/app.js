const express = require("express");

const app = express();

const PORT = 3000;
const terminator = "Terminator";

app.use("/public", express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/movies", (req, res) => {
  res.render("movies");
});

app.get("/movie/:id/:title", (req, res) => {
  const { id } = req.params;
  const { title } = req.params;
  res.render("movie", { movieId: id, title: title });
});

app.get("/movies/add", (req, res) => {
  res.send("Add element");
});

app.listen(PORT, () => {
  console.log(`API connect port: ${PORT}`);
});

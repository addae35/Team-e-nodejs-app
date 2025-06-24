import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

const noun = [
  "Gabriel",
  "Joel",
  "Susana",
  "Mawuko",
  "Emmanuel",
  
];
const adj = [
  " ",
];

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const db = require("./config/db");
const Date = require("./app/models/Date");
const Food = require("./app/models/Food");
const Suggestion = require("./app/models/Suggestion");
db.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
});

app.get("/date", (req, res) => {
  res.render("date");
});

app.get("/food", (req, res) => {
  res.render("food");
});

app.get("/suggestions", (req, res) => {
  res.render("suggestions");
});

app.get("/thanks", (req, res) => {
  res.render("thanks");
});

app.post("/date", (req, res) => {
  console.log(req.body);
  const date = new Date({
    value: req.body.date,
  });
  date.save();
  res.render("food");
});

app.post("/food", (req, res) => {
  console.log(req.body);
  const food = new Food({
    foods: req.body.foods,
  });
  food.save();
  res.render("suggestions");
});

app.post("/suggest", (req, res) => {
  console.log(req.body);

  const suggest = new Suggestion({
    suggests: req.body.suggests,
  });
  suggest.save();
  res.render("thanks");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`);
});

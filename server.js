const { response } = require("express");
const logger = require("morgan");
const express = require("express");

// create instance of express app
const app = express();

// logs activity to the console e.g. GET requests
app.use(logger("dev"));

// serve js and html in ejs
app.set("view engine", "ejs");

// we want to send css, images and other static files
app.use(express.static("views"));

app.set("views", __dirname + "/views");

//give the server access to the user input
app.use(express.json()); //Used to parse JSON bodies (instead of importing bodyparser)
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

// home route
app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.post("/", function (req, res) {
  // send back a page with yelled breakfast on it
  // breakfast was what we named the input in ejs
  const breakfast = req.body.breakfast;
  res.render("results.ejs", { data: breakfast });
});

var port = 3000;

app.listen(port, function () {
  console.log(`App running on port ${port}`);
});

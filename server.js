var express = require("express");
var bodyParse = require("body-parse");
var path = require("path");

var exp = express();
var PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(reservations.slice(0, 4));
});

app.get("/api/waitlist", function(req, res) {
    res.json(reservations.slice(5));
});

//starts listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    },
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    },
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    },
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    },
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    },
    {
        id: "09ur2098",
        name: "Henry",
        email: "mcintyrehh@gmail.com",
        phone: 9193490600
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "results.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(reservations.slice(0, 5));
});

app.get("/api/waitlist", function (req, res) {
    res.json(reservations.slice(5));
});
app.post("/api/tables", function (req, res) {
    var newRes = req.body;
    console.log(newRes);
    reservations.push(newRes);
    res.json(newRes);
})

//starts listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// {/* <script type="text/javascript"> */ }

// $("#add-btn").on("click", function (event) {
//     event.preventDefault()

//     var newRes = {
//         id: $("#id").val().trim(),
//         name: $("#name").val().trim(),
//         phone: $("#phone").val().trim(),
//         email: $("#email").val().trim()
//     };

//     // Question: What does this code do??
//     $.post("/api/tables", newRes)
//         .then(function (data) {
//             console.log(data);
//             console.log("Reservation Added");
//         });

// });

// </script >
/* <script>
$.get("/api/tables", function(data) {
    for (var i = 0; i<data.length; i++) {
        var res = data[i];
        $("#table").append(createCard(res));
    }
})
function createCard(res) {

    var card = $("<div>")
    card.append($("<div>").text("Name: " + res.name));
    card.append($("<div>").text("Phone Number: " + res.phone));
    card.append($("<div>").text("Email: " + res.email));
    card.append($("<div>").text("ID: " + res.id));
    return card;
}
$.get("/api/waitlist", function(data) {
    for (var i = 0; i<data.length; i++) {
        var res = data[i];
        $("#waitlist").append(createCard(res));
    }
})
</script> */


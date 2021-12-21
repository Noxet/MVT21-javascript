const express = require("express");

const app = express();
const port = 1337;

// Tell express to use EJS to render html
app.set("view engine", "ejs");

// needed to let express know how to interpret the data sent in the body (when using POST)
app.use(express.urlencoded({ extended: true }));

// get the movies/series map from the "DB" file
// Only necessary if we do not declare the variable in this file
const msdb = require("./msdb");
let ms = msdb.msDB;

/*
 * ROUTES
 */

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/getAll", function (req, res) {
    /*
    fs.readFile("dfd.json", function (err, data) {
        // example of reading file
        let movies = JSON.parse(data);
        // do this inside the callback function, due to async function
        res.send()
    });
    */

    // EJS will look in the "views" folder plus the path we give it
    res.render("pages/getall", { movies: ms["movies"], series: ms["series"] });
});

app.post("/addMS", function (req, res) {
    let mstype = req.body["mstype"];
    let title = req.body["title"];
    let year = Number(req.body["year"]);
    let rating = Number(req.body["rating"]);

    let msToAdd = {
        "title": title,
        "year": year,
        "rating": rating
    };

    if (mstype === "movie") {
        ms["movies"].push(msToAdd);
    } else if (mstype === "serie") {
        ms["series"].push(msToAdd);
    } else {
        /* This can indeed happen, since we can modify what we send.
         * Never trust the client, always verify on the server side!
         */
        console.log("This will NEVER happen :)");
        res.send("WTF!");
    }

    res.send("Added!");
});

app.listen(port, function () {
    console.log("Server started!");
});

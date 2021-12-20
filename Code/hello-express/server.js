const express = require("express");
const fs = require("fs");

const app = express();
// chose port >= 1024
const port = 1337;

/*
 * HTTP verbs (CRUD)
 * GET - Read (Idempotent)
 * POST - Create (Update)
 * (PUT - Udpate)
 * (DELETE - Delete)
 */

app.get("/", function (req, res) {
    // DO NOT hard code html
    res.send("<!DOCTYPE html><html><body><p>Welcome to the dark side</p></body></html>");
});

app.get("/getMovies", function (req, res) {
    fs.readFile("./movies.json", function (err, data) {
        if (err) {
            console.error(err);
            res.send("ERROR - could not get movies")
            return;
        }

        let movies = JSON.parse(data);
        console.log(movies);
        // send to client
        res.send(movies);
    });
});

app.get("/getBest", function (req, res) {
    fs.readFile("./movies.json", function (err, data) {
        if (err) {
            console.error(err);
            res.send("ERROR - could not get favourites")
            return;
        }

        let movies = JSON.parse(data);
        let best = getBest(movies);
        res.send(best);
    });
});


function getBest(movies) {
    let favourites = movies["favourites"];
    let best = [];
    for (const movie of favourites) {
        if (movie["rating"] === 10) {
            best.push(movie);
        }
    }

    return best;
}

// run the event loop
app.listen(port, function () {
    console.log("Server started, handling connections...");
});

module.exports = { getBest }
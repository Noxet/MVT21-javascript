const express = require("express");
const fs = require("fs");

const app = express();
const port = 1337;

// get the movies map from the "DB" file
// Only necessary to do this when the variable is not declared in this file
const moviesdb = require("./moviesdb");
let movies = moviesdb.moviesDB;

app.get("/", function (req, res) {
    // get the absolute path to the index.html file
    res.sendFile(__dirname + "/index.html");
});

app.get("/filterMovieOnRating", function (req, res) {
    let rating = Number(req.query["filterRating"]);
    let filteredMovies = filterOnRating(movies["seen"], rating);
    res.send(filteredMovies);
});

/**
 * Filter movies based on their rating, will match exact rating
 * 
 * @param {Array} movies - An array of already rated movies
 * @param {Number} filter - The rating to filter movies on
 */
function filterOnRating(movies, filter) {
    let filtered = [];
    for (const movie of movies) {
        if (movie["rating"] === filter) {
            filtered.push(movie);
        }
    }

    return filtered;
}

app.listen(port, function () {
    console.log("Web server started!");
});
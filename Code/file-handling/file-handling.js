const fs = require("fs");

readFile3();

function readFile1() {
    fs.readFile("./userdata.txt", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let users = data.toString().split("\n");
        console.log(users);
    });

    console.log("DONE!");
}


function readFile2() {
    fs.readFile("./userdata2.txt", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let users = data.toString().split("\n");
        for (const user of users) {
            console.log(user.split(" "));
        }
    });
}


function readFile3() {
    fs.readFile("./movies.json", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let movies = JSON.parse(data);
        movies["favourites"].forEach(function (movie) {
            if (movie["rating"] > 9) {
                console.log(movie["title"]);
            }

        })

    });
}
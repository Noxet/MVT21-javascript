const { filterMS, suggest } = require("./server");

test("FilterMS basic test", function () {
    let ms = {
        "movies":
            [
                { "title": "Test M1", "year": 1999, "rating": 2 }
            ],
        "series":
            [
                { "title": "Test S1", "year": 1989, "rating": 4 }
            ]
    };
    let filtered = filterMS(ms, 2);
    expect(filtered["movies"].length).toBe(1);
    expect(filtered["series"].length).toBe(0);
});

test("test suggestion", function () {
    for (let i = 0; i < 100; i++) {
        //let suggestion = suggest(ms, "movie", 8);
        //expect(suggestion["rating"]).toBe(8);
    }
});
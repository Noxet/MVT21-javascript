
const { getAverage } = require("./average");

test("test normal list", function () {
    let list = [1, 2, 3, 4, 5];
    expect(getAverage(list)).toBe(3);
});


test("test empty list", function () {
    expect(getAverage([])).toBe(undefined);
});
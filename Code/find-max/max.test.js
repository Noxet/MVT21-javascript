const { calcMax } = require("./max");

test("testing max values", function () {
    expect(calcMax([1, 3, 2])).toBe(3);
    expect(calcMax([-1, -3, -2])).toBe(-1);
});
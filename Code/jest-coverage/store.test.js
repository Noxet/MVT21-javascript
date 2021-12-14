const { expect } = require("@jest/globals");
const { ageDiscount, filterCustomer } = require("./store");

test("test age discount", function () {
    expect(ageDiscount(12)).toBe(0.20);
    expect(ageDiscount(22)).toBe(0.15);
    expect(ageDiscount(64)).toBe(0);
    expect(ageDiscount(127)).toBeGreaterThanOrEqual(0.20);
});

test("test filters", function () {
    let customers = [
        { "name": "James", "age": 58 },
        { "name": "Lars", "age": 57 },
        { "name": "Kirk", "age": 59 },
        { "name": "Robert", "age": 57 },
        { "name": "Jason", "age": 58 }
    ];

    expect(filterCustomer(customers, "J").length).toBe(2);
    expect(filterCustomer(customers, "").length).toBe(0);
    expect(filterCustomer([], "J").length).toBe(0);

    expect(filterCustomer(customers, "j").length).toBe(2);
})
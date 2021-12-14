/**
 * 
 * .....
 * All retirees should get at least 20% discount
 * 
 * @param {Number} age 
 * @returns 
 */
function ageDiscount(age) {
    if (age < 18) {
        return 0.20;
    } else if (age <= 25) {
        return 0.15;
    } else if (age < 65) {
        return 0;
    } else {
        return 0.20;
    }
}

/**
 * Takes an array of customers and returns those customers whose names begin
 * with "letterToFilter", as an array.
 * 
 * A customer is stored as a map, e.g., {name: "John", age: 42}.
 * 
 * @param {Array} customer s
 * @param {String} letterToFilter 
 */
function filterCustomer(customers, letterToFilter) {
    // [{name: "John", age: 42}, {name: "Ted", age: 37}, ...]

    let filteredCustomers = [];
    for (const c of customers) {
        if (c["name"].charAt(0).toLowerCase() === letterToFilter.toLowerCase()) {
            filteredCustomers.push(c);
        }
    }

    return filteredCustomers;
}

module.exports = {
    ageDiscount,
    filterCustomer
}
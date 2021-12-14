function calcAverage() {
    let values = [];

    for (let i = 0; i < 5; i++) {
        let val = Number(prompt("Enter a value:"));
        values.push(val);
    }

    let result = getAverage(values)
    console.log(result);
}


function getAverage(values) {
    if (values.length == 0) {
        return undefined;
    }

    let sum = 0;
    for (const v of values) {
        sum += v;
    }

    let result = sum / values.length;
    return result;
}

// make sure that the test can access this function
module.exports = {
    getAverage
};
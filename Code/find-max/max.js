
const args = process.argv.slice(2);

let numbers = [];
for (const v of args) {
    numbers.push(Number(v));
}

let max = calcMax(numbers);
console.log("Max value: " + max);

function calcMax(values) {
    let biggestSoFar = values[0];
    for (const value of values) {
        if (value > biggestSoFar) {
            biggestSoFar = value;
        }
    }

    return biggestSoFar;
}

module.exports = {
    calcMax
}
/**
 * Simple flux calculator to determine the amount of flux needed to leave
 * the schwartzchild radius in a black hole.
 * 
 * Simply put: 
 * - It is only worth calculating if b and d are non-zero.
 * - We are screwed (infinite flux) if c is non-zero while the array, a, is empty.
 * - The third value in the array (if given) sets the flux to be at lest 42 but no more than 69.
 * - If the array only consists of a single value, the flux will be 12 times this value.
 * - If we haven't been able to calculate the flux by now, the flux value should be c.
 */
function calculateFlux(a, b, c, d) {
    if (b == 0 && d == 0) {
        return 0;
    }

    if (c != 0 && !a.length) {
        return Infinity;
    }

    if (a.length >= 3) {
        let coeff = 0;
        switch (a[2]) {
            case 0:
                coeff = Math.floor(Math.random() * 11 + 1);
                break;

            case 1:
                coeff = Math.floor(Math.random() * 3 + 1);
                break;

            case 12:
                coeff = Math.floor(Math.random() * 27 + 1);
                break;

            default:
                coeff = 1;
                break;
        }

        return 42 + coeff;
    } else if (a.length == 1) {
        return a[0] * 12;
    } else {
        return c;
    }
}

module.exports = { calculateFlux };
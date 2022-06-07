/**
 * Given a signed 32-bit integer `x`, return x with its `digits reversed`. If reversing x causes the value to go outside the signed `32-bit` integer range then return `0`.
 * For more details see: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x number to be reversed
 * @return {number} reversed number or zero
 */
const reverse = (x) => {
    let result = 0;

    let signMultiplier = 1; // positive number

    if (x < 0) {
        signMultiplier = -1; // negative number

        x = signMultiplier * x; // unsigned the value.
    }

    while (x > 0) {
        // get the last digit and update the result on the same position just in reverse order.
        result = result * 10 + (x % 10);

        // if its bigger the 32-bit, return 0
        if (result > Math.pow(2, 31)) {
            result = 0;
            break;
        }

        // remove the last digit from input
        x = Math.floor(x / 10);
    }

    // signed before returning
    return result * signMultiplier;
};

// test data
reverse(1534236469); // returns 0;
reverse(4321); // returns 1234;
reverse(231); // returns 132;
reverse(-427); // returns -724;

/**
 * Given an integer `x`, return `true` if `x` is palindrome integer.
 * For more details see: https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x number to be reversed
 * @return {boolean}
 */
const isPalindrome = (x) => {
    let result = 0,
        input = x;

    // if number is negative, it can't be palindrome.
    if (x < 0) {
        return false;
    }

    while (x > 0) {
        // get the last digit and update the result on the same position just in reverse order.
        result = result * 10 + (x % 10);

        // remove the last digit from input
        x = Math.floor(x / 10);
    }

    return result === input;
};

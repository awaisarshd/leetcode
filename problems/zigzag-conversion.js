/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * ```
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * ```
 * For more detail see: https://leetcode.com/problems/zigzag-conversion/
 *
 * @param {string} s input string
 * @param {number} numRows num of rows to zig-zag the input
 * @return {string} returns a zig-zag pattern
 */
var makeZigZag = function (s, numRows) {
    let len = s.length,
        output = "";

    if (numRows === 1 || len <= numRows) return s;

    for (let i = 0; i < numRows; i++) {
        let direction = 0, // 0: down -> up ( |/ ), 1: up -> down ( /| )
            index = i,
            stepSize;

        output += s[i];

        while (index < len) {
            if (i === 0) direction = 0; // set direction down
            else if (i === numRows - 1) direction = 1; // set direction up

            if (direction === 1) stepSize = 2 * i; // (i + i)
            else stepSize = 2 * (numRows - i - 1); // (m-i-1) + (m-i-1)

            index += stepSize;

            if (index < len) {
                output += s[index];
            }

            direction = direction ? 0 : 1; // change direction on each read.
        }
    }

    return output;
};

// test data
makeZigZag("AAA", 1); // returns `AAA`
makeZigZag("PAYPALISHIRING", 3); // returns `PAHNAPLSIIGYIR`
makeZigZag("PAYPALISHIRING", 4); // returns `PINALSIGYAHRPI`

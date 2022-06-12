/**
 * Given a roman numeral, convert it to an integer. Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
 * For more details see: https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} roman
 * @return {string}
 */
var romanToInteger = function (roman) {
    // roman symbols
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let idx = 0;
    let output = 0;

    while (idx < roman.length) {
        let current = romanSymbols[roman[idx]];
        let next = romanSymbols[roman[idx + 1]] ?? 0;

        if (next > current) {
            output += next - current;
            idx += 2;
        } else {
            output += romanSymbols[roman[idx]];
            idx++;
        }
    }

    return output;
};

romanToInteger("MCCXXXIV"); // returns `1234`
romanToInteger("III"); // returns `3`
romanToInteger("IX"); // returns `9`

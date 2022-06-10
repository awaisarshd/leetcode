/**
 * Given an integer, convert it to a roman numeral. Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
 * For more details see: https://leetcode.com/problems/integer-to-roman/
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // roman symbols
    const romanSymbols = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    // roman symbols numeric denominations
    const denominations = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];

    let idx = 0;
    let output = "";

    // roman numbers doesn't have zero, so we will check only if the number is large then it
    while (num > 0) {
        // get the current denominator
        let denominator = denominations[idx];

        // divide the number with the denominator,
        // if its greater then 1 perform the logic.
        if (num / denominator >= 1) {
            // get the current symbol
            let romanSymbol = romanSymbols[idx];

            // check how many time that number have come
            // `~~` convert the float into integer.
            let multiples = ~~(num / denominator);

            // append the symbol to the output.
            output += romanSymbol.repeat(multiples);

            // update the number with the remainder.
            num %= denominator;
        }

        idx++;
    }

    return output;
};

intToRoman(1234); // returns `MCCXXXIV`
intToRoman(111); // returns `III`
intToRoman(9); // returns `IX`

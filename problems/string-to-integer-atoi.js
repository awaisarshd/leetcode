/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();

    const regex = /^(\d+|[+-]\d+)/;

    // The substituted value will be contained in the result variable
    let result = s.match(regex);

    if (result) {
        result = parseInt(result[0]);
    } else {
        return 0;
    }

    if (result < 1 << 31) return 1 << 31;
    if (result > -(1 << 31) - 1) return -(1 << 31) - 1;
    return result;
};

console.log(myAtoi("-00002347 jashgdjasd"));
console.log(myAtoi("ajsdg 000020347 jashgdjasd"));

/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * Check LeetCode for more details: https://leetcode.com/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string} longest prefix or `""`
 */
var longestCommonPrefix = function (strs) {
    let first = strs[0]; // get first element

    // check for conditions, number of array should be 1 < arr.len < 200
    // and first element should be 0 <= first.length <=200
    if (strs.length < 1 || strs.length > 200) return "";
    if (!first && (strs[0].length < 1 || strs[0].length > 0)) return "";

    let prefix = "",
        i = 0;

    while (i < first.length) {
        let cPrefix = prefix + first[i];

        let isSame = true;

        strs.forEach((s) => {
            if (!s.startsWith(cPrefix)) {
                return (isSame = false);
            }
        });

        if (!isSame) break;

        prefix = cPrefix;
        i++;
    }

    return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]); // returns `fl`
longestCommonPrefix(["dog", "racecar", "car"]); // returns `""`
longestCommonPrefix([""]); // returns `""`

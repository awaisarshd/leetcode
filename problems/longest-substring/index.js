/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    // if its a only char, then return its length.
    if (s.length === 1) return s.length;

    var length = 0;
    var subStr = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            // if subStr is empty or current index is not sub string,
            if (subStr.length === 0 || subStr.indexOf(s[j]) === -1) {
                subStr += s[j];
            } else {
                break;
            }
        }

        if (subStr) {
            length = subStr.length > length ? subStr.length : length;
        }

        subStr = "";
    }

    return length;
};

// test data
console.log(lengthOfLongestSubstring("dvdf")); // returns 3 as `vdf` is the longest sub-string
console.log(lengthOfLongestSubstring("bbbbb")); // returns 1 as `b` is the longest sub-string
console.log(lengthOfLongestSubstring("pwwkew")); // returns 3 as `wke` is the longest sub-string
console.log(lengthOfLongestSubstring("a")); // returns 1 as `a` is the longest sub-string
console.log(lengthOfLongestSubstring("au")); // returns 2 as `au` is the longest sub-string

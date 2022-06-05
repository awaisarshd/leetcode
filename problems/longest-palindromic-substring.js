/**
 * Given a string `s`, return the longest palindromic substring in `s`.
 * For more details check here: https://leetcode.com/problems/longest-palindromic-substring/
 *
 * @param {string} s string input
 * @return {string} longest palindromic substring
 */
var longestPalindrome = (s) => {
    // check if the whole string is palindrome
    if (s === s.split("").reverse()) {
        return s;
    }

    let palindrome = "";

    for (let i = 0; i < s.length; ++i) {
        // check even and odd palindromes
        let p1 = subStringPalindrome(s, i, i);
        let p2 = subStringPalindrome(s, i, i + 1);

        // if both are same then assigned any if the are bigger then current.
        if (p1.length === p2.length && p1.length > palindrome.length) {
            palindrome = p1;
        }

        // if 1st is bigger then the 2nd and the current, make it current.
        else if (p1.length > p2.length && p1.length > palindrome.length) {
            palindrome = p1;
        }

        // if 2nd is bigger then current, make it current.
        else if (p2.length > palindrome.length) palindrome = p2;
    }

    return palindrome;
};

/**
 * get the sub string palindrome
 * @param {string} s input string
 * @param {number} low start
 * @param {number} high end
 * @returns matching palindrome
 */
const subStringPalindrome = (s, low, high) => {
    while (low >= 0 && high < s.length && s.charAt(low) == s.charAt(high)) {
        // Expand in both directions
        low--;
        high++;
    }

    return s.substring(low + 1, high);
};

// test data
longestPalindrome("abdbbav"); // returns `bdb`
longestPalindrome("babad"); // returns `bab`. `aba` also a valid as both have same length
longestPalindrome("abba"); // returns `abba`
longestPalindrome("abvdde"); // returns `dd`

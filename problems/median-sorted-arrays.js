/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * For more details check: https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * @param {number[]} nums1 1st array of numbers
 * @param {number[]} nums2 2nd array of numbers
 * @return {number} return sorted array's median
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // combine both arrays and sort them in ascending order
    let numArr = nums1.concat(nums2).sort((a, b) => a - b);

    // array length
    let len = numArr.length;

    // if its a even number then get two middle number and returns there average as median
    if (len % 2 === 0) {
        let m = len / 2 - 1;
        return (numArr[m] + numArr[m + 1]) / 2;
    }

    // if odd, then get the middle number as
    else {
        let m = Math.ceil(len / 2) - 1;
        return numArr[m];
    }
};

// test data
console.log(findMedianSortedArrays([1, 2, 4], [3])); // returns 2.5;
console.log(findMedianSortedArrays([1, 2, 4], [3, 5])); // returns 3;

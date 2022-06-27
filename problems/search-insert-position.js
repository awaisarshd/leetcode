/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * For more details Check: https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // initialize the variables.
    let output = -1,
        left = 0,
        right = nums.length - 1,
        center = 0;

    // loop while the until the whole input is checked.
    while (right >= left) {
        // calculate center
        center = Math.ceil((left + right) / 2);

        // get current value
        let current = nums[center];

        // return the value if center is equal to target.
        if (target === current) {
            output = center;
            break;
        }

        // if target is greater then center, update the left.
        else if (target > current) {
            output = left = center + 1;
        }

        // if target is less then the center, update right.
        else if (target < current) {
            right = center - 1;
            output = center;
        }
    }

    if (output === -1) output = 0;

    return output;
};

searchInsert([1, 3, 5], 4); // returns 2

searchInsert([1, 3, 5, 6], 0); // returns 0

searchInsert([1, 3, 5, 6], 2); // returns 1

searchInsert([1, 3, 5, 6], 7); // returns 4

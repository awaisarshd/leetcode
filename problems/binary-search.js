/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * For more details check: https://leetcode.com/problems/binary-search/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
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
            left = center + 1;
        }

        // if target is less then the center, update right.
        else if (target < current) {
            right = center - 1;
        }
    }

    return output;
};

search([-1, 0, 3, 5, 9, 12], 9); // returns 4

search([-1, 0, 3, 5, 9, 12], 2); // returns -1

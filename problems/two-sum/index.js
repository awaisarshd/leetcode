/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let firstIndex = 0,
        secondIndex;

    for (let i = 0; i < nums.length; i++) {
        firstIndex = i;

        for (let j = 0; j < nums.length; j++) {
            // if the both indexes are same then continue.
            if (i === j) continue;

            if (nums[i] + nums[j] === target) {
                secondIndex = j;
                break; // break;
            }
        }

        if (secondIndex) break;
    }

    return [firstIndex, secondIndex];
};

twoSum([3, 2, 4], 6); // returns [1, 2]

twoSum([2, 7, 15, 17], 9); // returns [0, 1]

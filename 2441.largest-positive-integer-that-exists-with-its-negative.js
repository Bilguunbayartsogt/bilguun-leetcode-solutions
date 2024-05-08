var findMaxK = function(nums) {
    let map = new Map();
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (map.has(num) && nums[i] + map.get(num) === 0) {
            result = Math.max(result, num);
        } else {
            map.set(num, nums[i]);
        }
    }
    return result; 
};

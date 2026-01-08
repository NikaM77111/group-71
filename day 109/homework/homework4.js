let nums1 = [1, 2, 3, 5, 8];
let nums2 = [2, 4, 5, 8, 9];

let mutualNums = [];

for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
        mutualNums.push(nums1[i]);
    }
}

console.log(mutualNums);

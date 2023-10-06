/* 
  有序数组中的二分查找，双闭区间，k神版
*/
export const binarySearch = (nums: number[], target: number) => {
  let result = -1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    if (target > nums[m]) l = m + 1;
    else if (target < nums[m]) r = m - 1;
    else {
      result = m;
      break;
    }
  }
  return result;
};

/* 
  有序数组中的二分查找，背诵版【推荐】
*/
export const binarySearch2 = (nums: number[], target: number) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (target > nums[m]) l = m + 1;
    else {
      r = m;
    }
  }
  return l;
};

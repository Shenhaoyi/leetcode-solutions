/* 
  归并排序，
  划分阶段：二分，直至不能再分
  合并阶段：左右两组数组分别都是有序的，依次从下表0的位置开始比较，并push到结果中
*/
export const mergeSort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums;
  const m = Math.floor(nums.length / 2);
  // 与二叉树的后续遍历一样，左右先排好序，然后在归并
  const left = mergeSort(nums.slice(0, m)); // 不包含m
  const right = mergeSort(nums.slice(m)); // 包含m
  return merge(left, right);
};

// 合并2个有序数组
const merge = (nums1: number[], nums2: number[]): number[] => {
  if (nums1.length === 0) {
    return nums2;
  }
  if (nums2.length === 0) {
    return nums1;
  }
  // 把最小的放第一个位置，剩下的继续归并
  return nums1[0] < nums2[0]
    ? [nums1[0], ...merge(nums1.slice(1), nums2)]
    : [nums2[0], ...merge(nums1, nums2.slice(1))];
};

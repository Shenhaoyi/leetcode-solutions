/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/* 
  参考思路（没有参考实现）：https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/4763/zhen-zheng-ologmnde-jie-fa-na-xie-shuo-gui-bing-pa/
  从两个正序数组中找到第k大的元素
  二分法，每次减小一半的范围。
  思路，nums1的前i个，nums2的前j个，满足i+j=k, 例如 nums1[i] 和nums2 [j]中，前者较小，则nums1的前i个不会有目标值，可以舍弃
  注意：这个题目的坑很多，要注意各种下标的计算
  递归终点：1.其中一个数组被完全抛弃；2.k减半多次后变成1
*/
function findKthTargetFromTwoList(nums1: number[], nums2: number[], begin1: number, begin2: number, k: number) {
  // 第1小的，则直接比较
  if (k === 1) return Math.min(nums1[begin1], nums2[begin2]);

  const length1 = nums1.length;
  const length2 = nums2.length;

  // 确保丢掉的数字少于k/2
  const m = Math.floor(k / 2) - 1; // 2 => 0; 3 => 0; 4 => 1; 5 => 1;  因为2个begin就已经占了2位了，k=2和3的时候都应该是0
  const p1 = Math.min(begin1 + m, length1 - 1); // 越界处理
  const p2 = Math.min(begin2 + m, length2 - 1);
  if (nums1[p1] < nums2[p2]) {
    if (p1 === length1 - 1) {
      // nums1抛弃
      const nextK = k - (p1 - begin1 + 1); // 抛弃 begin1~p1 区间内的元素
      return nums2[begin2 + nextK - 1]; // ，从begin2开始到第nextK个元素，需要-1
    }
    return findKthTargetFromTwoList(nums1, nums2, p1 + 1, begin2, k - (p1 + 1 - begin1)); // 排除 begin1 ~ p1的内容 （不含p1+1）
  } else {
    if (p2 === length2 - 1) {
      // nums2抛弃
      return nums1[begin1 + k - (p2 - begin2 + 1) - 1];
    }
    return findKthTargetFromTwoList(nums1, nums2, begin1, p2 + 1, k - (p2 + 1 - begin2));
  }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 二分查找两个数组中第k大的元素
  const length1 = nums1.length;
  const length2 = nums2.length;
  // 处理一个数组为空的情况
  if (!length1) return findMedianSortedArray(nums2);
  if (!length2) return findMedianSortedArray(nums1);
  const length = length1 + length2;
  let result = 0;
  if (length % 2 === 0) {
    // 长度和为偶数 0123
    const m = length / 2; // 中位数为m, m+1的平均数
    result =
      (findKthTargetFromTwoList(nums1, nums2, 0, 0, m + 1) + findKthTargetFromTwoList(nums1, nums2, 0, 0, m)) / 2;
  } else {
    // 长度和为奇数 012
    const m = (length - 1) / 2; // 中位数为m
    result = findKthTargetFromTwoList(nums1, nums2, 0, 0, m + 1);
  }
  return result;
}

// 获取有序数组的中位数
function findMedianSortedArray(nums: number[]) {
  const { length } = nums;
  if (!length) return 0;
  if (length % 2 === 0) {
    // 0123
    const m = length / 2;
    return (nums[m] + nums[m - 1]) / 2;
  } else {
    // 012
    const m = (length - 1) / 2;
    return nums[m];
  }
}
// @lc code=end

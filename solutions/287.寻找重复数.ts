/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // 1、【x，只适用于只重复一次的情况】异或，全员异或，再与1-n分别异或。
  // 注意，可能重复2次以上，循环只会进行由前2个重复的地方形成的环
  /* 
    2、转换成寻找链表换的入口
    数组值就是next元素的下标(node.val is the index of node.next)，因为有2个位置是重复的，那么他们都会指向一个节点。
    * 想像一下，如果没有重复，就是一条链表
    * 如果有重复，则第一个位置正常指向下一个节点N1，遇到第二个位置是，又指向N1了
  */

  let slow = 0;
  let fast = 0;
  // 一定存在，所以一定能 break，可以设置为 true
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }
  slow = 0;
  while (nums[slow] !== nums[fast]) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return nums[slow];
}
// @lc code=end

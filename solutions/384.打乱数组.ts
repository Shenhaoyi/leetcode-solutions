/*
 * @lc app=leetcode.cn id=384 lang=typescript
 *
 * [384] 打乱数组
 */

// @lc code=start
class Solution {
  #nums: number[];
  nums: number[];
  constructor(nums: number[]) {
    this.#nums = [...nums];
    this.nums = [...nums];
  }

  reset(): number[] {
    this.nums = [...this.#nums];
    return this.nums;
  }

  shuffle(): number[] {
    for (let i = 0; i < this.nums.length - 1; i++) {
      const j = Math.floor(Math.random() * (this.nums.length - i)) + i; // 范围 [i, this.nums.length), 即 [i, this.nums.length-1]
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]; // 交换
    }
    return this.nums;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

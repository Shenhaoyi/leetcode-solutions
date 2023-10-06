/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class MaxHeap {
  list: number[] = [];
  constructor(nums: number[]) {
    this.list = [...nums];
    this.buildMaxHeap();
  }
  getParent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i: number) {
    return 2 * i + 1;
  }
  getRight(i: number) {
    return 2 * i + 2;
  }
  get size() {
    return this.list.length;
  }
  swap(i: number, j: number) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }
  siftUp(i: number) {
    if (i < 0) return;
    const parent = this.getParent(i);
    if (parent >= 0 && this.list[i] > this.list[parent]) {
      this.swap(parent, i);
      this.siftUp(parent);
    }
  }
  push(num: number) {
    this.list.push(num);
    this.siftUp(this.size - 1);
  }
  peak() {
    return this.list[0];
  }
  siftDown(i: number) {
    if (i >= this.size) return;
    const left = this.getLeft(i);
    const right = this.getRight(i);
    let target = i;
    if (left < this.size && this.list[left] > this.list[target]) target = left;
    if (right < this.size && this.list[right] > this.list[target]) target = right;
    if (target !== i) {
      this.swap(i, target);
      this.siftDown(target);
    }
  }
  pop() {
    this.swap(0, this.size - 1);
    const result = this.list.pop();
    this.siftDown(0);
    return result;
  }
  buildMaxHeap() {
    for (let i = this.size - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }
}
function findKthLargest(nums: number[], k: number): number {
  // 1、全部排序之后返回第k大(写起来省事点)
  // let result = 0;
  // const maxHeap = new MaxHeap(nums);
  // for (let i = 0; i < k; i++) {
  //   result = maxHeap.pop() as number;
  // }
  // return result;
  // 2、维护一个大小为k的大顶堆，目标是得到最大的k个元素。若将所有元素取反，是最小的k个元素，每次将最大的弹出即可（效果并不好啊）
  const negationNums = nums.map((i) => -i);
  const { length } = negationNums;
  const maxHeap = new MaxHeap(negationNums.slice(0, k));
  for (let i = k; i < length; i++) {
    const current = negationNums[i]; // 这里注意不要写成nums了
    maxHeap.push(current);
    maxHeap.pop();
  }
  return -maxHeap.peak();
}
// @lc code=end

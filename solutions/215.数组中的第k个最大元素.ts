/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {}
// @lc code=end

/* ======================================================================================== */
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

// 1、堆排序之后返回第k大(写起来省事点)
function findKthLargest_1(nums: number[], k: number): number {
  let result = 0;
  const maxHeap = new MaxHeap(nums);
  for (let i = 0; i < k; i++) {
    result = maxHeap.pop() as number;
  }
  return result;
}
// 2、维护一个大小为k的大顶堆，目标是得到最大的k个元素。若将所有元素取反，是最小的k个元素，每次将最大的弹出即可（效果并不好啊）
function findKthLargest_2(nums: number[], k: number): number {
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
/*
  3、如果题目给的自然数的话，可以使用计数排序（因为是整数，可以先找到最小的数字，然后整体减去这个最小的数字，再做计数排序）
  如果max远大于数组的长度就不是O(N)了
*/
function findKthLargest_3(nums: number[], k: number): number {
  let result = 0;
  let min = Infinity;
  let max = -Infinity;
  nums.forEach((current) => {
    if (current < min) min = current;
    if (current > max) max = current;
  });
  // 数据整体减min，保证都大于等于0
  const newMin = min - min;
  const newMax = max - min;
  const map = new Map<number, number>();
  nums.forEach((current) => {
    const newCurrent = current - min;
    const count = map.get(newCurrent) || 0;
    map.set(newCurrent, count + 1);
  });

  for (let i = newMax; i >= newMin; i--) {
    const count = map.get(i);
    if (count) {
      k -= count;
      if (k <= 0) {
        result = i + min; // 记得加回来
        break;
      }
    }
  }
  return result;
}
// 4、快排，当pivot与k-1相等时就可以返回了
const partition4 = (nums: number[], left: number, right: number) => {
  if (left === right) return left;
  let l = left;
  let r = right;
  const base = nums[right];
  while (l < r) {
    while (l < r && nums[l] <= base) l++;
    while (l < r && nums[r] >= base) r--;
    if (l < r) {
      swap4(nums, l, r);
    }
  }
  // (不知道为啥partition这里的差别不大，但是落后那么多)
  // let l = left;
  // let r = right - 1;
  // const base = nums[right];
  // while (true) {
  //   while (nums[l] < base) l++;
  //   while (nums[r] > base) r--;
  //   if (l < r) {
  //     swap4(nums, l, r);
  //     l++;
  //     r--;
  //   } else {
  //     break;
  //   }
  // }
  swap4(nums, l, right);
  return l;
};

const quickSort4 = (nums: number[], left: number, right: number, targetIndex: number) => {
  if (left >= right) return;
  const pivot = partition4(nums, left, right);
  if (pivot === targetIndex) {
    return;
  } else if (pivot > targetIndex) {
    quickSort4(nums, left, pivot - 1, targetIndex);
  } else if (pivot < targetIndex) {
    quickSort4(nums, pivot + 1, right, targetIndex);
  }
};
const swap4 = (nums: number[], i: number, j: number) => {
  if (i === j || i < 0 || j < 0) return;
  [nums[i], nums[j]] = [nums[j], nums[i]];
};
function findKthLargest_4(nums: number[], k: number): number {
  quickSort4(nums, 0, nums.length - 1, nums.length - k);
  return nums[nums.length - k];
}
// 5、快排偷懒写法，超时
function findKthLargest_5(nums: number[], k: number): number {
  // 快排，当pivot与k-1相等时就可以返回了
  const targetIndex = nums.length - k;
  const quickSort = (nums: number[]): number[] => {
    if (nums.length < 2) return nums;
    const left: number[] = [];
    const right: number[] = [];
    const pivot = Math.floor(nums.length / 2);
    const base = nums[pivot];
    nums.forEach((current, index) => {
      if (index === pivot) return;
      if (current < base) left.push(current);
      else right.push(current);
    });
    return [...quickSort(left), base, ...quickSort(right)];
  };
  const newNums = quickSort(nums);
  return newNums[targetIndex];
}

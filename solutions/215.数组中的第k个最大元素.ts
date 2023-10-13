/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class MaxHeap {
  array: number[];

  constructor(nums: number[] = []) {
    this.array = [...nums];
    this.buildHeap();
  }
  buildHeap() {
    for (let i = this.getParent(this.size - 1); i >= 0; i--) {
      // 注意，起始位置的优化
      this.siftDown(i);
    }
  }

  get size() {
    return this.array.length;
  }
  isEmpty() {
    return this.size === 0;
  }
  getLeft(i: number) {
    return 2 * i + 1;
  }
  getRight(i: number) {
    return 2 * i + 2;
  }
  getParent(i: number) {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  peak() {
    return this.array[0];
  }
  swap(i: number, j: number) {
    if (i === j) return;
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  push(val: number) {
    this.array.push(val);
    this.siftUp(this.size - 1);
  }
  siftUp(i: number) {
    if (i < 1) return;
    const parent = this.getParent(i);
    if (this.array[i] > this.array[parent]) {
      this.swap(i, parent);
      this.siftUp(parent);
    }
  }

  pop() {
    if (this.isEmpty()) throw new RangeError('Heap is empty.');
    this.swap(0, this.size - 1);
    const val = this.array.pop() as number;
    this.siftDown(0);
    return val;
  }

  siftDown(i: number) {
    const left = this.getLeft(i);
    const right = this.getRight(i);
    let targetIndex = i;
    if (left < this.size && this.array[left] > this.array[targetIndex]) targetIndex = left;
    if (right < this.size && this.array[right] > this.array[targetIndex]) targetIndex = right;
    if (targetIndex !== i) {
      this.swap(i, targetIndex);
      this.siftDown(targetIndex);
    }
  }
}
// 2、维护一个大小为k的大顶堆，目标是得到最大的k个元素。若将所有元素取反，是最小的k个元素，每次将最大的弹出即可（效果并不好啊）
function findKthLargest(nums: number[], k: number): number {
  const negationNums = nums.map((i) => -i);
  const maxHeap = new MaxHeap(negationNums.slice(0, k));
  for (let i = k; i < negationNums.length; i++) {
    const current = negationNums[i];
    maxHeap.push(current);
    maxHeap.pop();
  }
  return -maxHeap.peak();
}
// @lc code=end


// 1、堆排序之后返回第k大(写起来省事点)
function findKthLargest_1(nums: number[], k: number): number {
  let result = 0;
  const maxHeap = new MaxHeap(nums);
  for (let i = 0; i < k; i++) {
    result = maxHeap.pop() as number;
  }
  return result;
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
// 5、快排偷懒写法，超时【x】
// function findKthLargest_5(nums: number[], k: number): number {
//   // 快排，当pivot与k-1相等时就可以返回了
//   const targetIndex = nums.length - k;
//   const quickSort = (nums: number[]): number[] => {
//     if (nums.length < 2) return nums;
//     const left: number[] = [];
//     const right: number[] = [];
//     const pivot = Math.floor(nums.length / 2);
//     const base = nums[pivot];
//     nums.forEach((current, index) => {
//       if (index === pivot) return;
//       if (current < base) left.push(current);
//       else right.push(current);
//     });
//     return [...quickSort(left), base, ...quickSort(right)];
//   };
//   const newNums = quickSort(nums);
//   return newNums[targetIndex];
// }

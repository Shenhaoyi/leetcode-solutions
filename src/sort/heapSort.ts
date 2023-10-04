import { MaxHeap } from '../heap/maxHeap';
import { swap } from '../utils';

// 利用大顶堆类来实现(推荐)
export const heapSort = (nums: number[]) => {
  const maxHeap = new MaxHeap(nums);
  const result = [];
  while (maxHeap.size) {
    result.unshift(maxHeap.pop());
  }
  return result;
};

// 将大顶堆类中用到的内容提取出来，要注意length的获取，nums在pop的过程中长度在变化
export const heapSort2 = (nums: number[]) => {
  const getSize = () => nums.length;
  const getLeft = (i: number) => Math.floor(2 * i + 1);
  const getRight = (i: number) => Math.floor(2 * i + 2);
  const siftDown = (i: number) => {
    if (i >= getSize()) return;
    const left = getLeft(i);
    const right = getRight(i);
    let swapIndex = i; // 记录当前节点和左右子节点中最大值的下标
    if (left < getSize() && nums[swapIndex] < nums[left]) swapIndex = left;
    if (right < getSize() && nums[swapIndex] < nums[right]) swapIndex = right;
    if (swapIndex === i) {
      return;
    } else {
      swap(nums, i, swapIndex);
      siftDown(swapIndex);
    }
  };
  // 建立大顶堆。O(NlogN)
  const buildMaxHeap = (nums: number[]) => {
    const length = getSize();
    for (let i = length - 1; i >= 0; i--) {
      siftDown(i);
    }
  };

  const pop = () => {
    swap(nums, 0, getSize() - 1);
    const target = nums.pop();
    siftDown(0);
    return target;
  };

  const sort = () => {
    const result: number[] = [];
    buildMaxHeap(nums);
    while (getSize()) {
      result.unshift(pop() as number);
    }
    nums.push(...result);
    return nums;
  };
  return sort();
};

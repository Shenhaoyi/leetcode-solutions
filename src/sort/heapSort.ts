import { MaxHeap } from '../heap/maxHeap';

export const heapSort = (nums: number[]) => {
  const maxHeap = new MaxHeap(nums);
  const result = [];
  while (maxHeap.size) {
    result.unshift(maxHeap.pop());
  }
  return result;
};

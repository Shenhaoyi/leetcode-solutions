// 数组实现大顶堆，参考https://www.hello-algo.com/chapter_heap/heap/
class MaxHeap {
  array: number[];

  /* 构造方法，建立空堆或根据输入列表建堆 */
  constructor(nums: number[] = []) {
    // 将列表元素原封不动添加进堆
    this.array = [...nums];
    // 堆化除叶节点以外的其他所有节点(自底向上)
    for (let i = this.getParent(this.size - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  get size() {
    return this.array.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  /* 获取左子节点索引 */
  getLeft(i: number): number {
    return 2 * i + 1;
  }

  /* 获取右子节点索引 */
  getRight(i: number): number {
    return 2 * i + 2;
  }

  /* 获取父节点索引 */
  getParent(i: number): number {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 访问堆顶元素 */
  peek(): number {
    return this.array[0];
  }

  swap(i: number, j: number) {
    if (i === j) return;
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  /* 元素入堆 */
  push(val: number): void {
    // 添加节点
    this.array.push(val);
    // 从底至顶堆化
    this.siftUp(this.size - 1);
  }

  /* 从节点 i 开始，从底至顶堆化 */
  siftUp(i: number): void {
    while (true) {
      // 获取节点 i 的父节点
      const p = this.getParent(i);
      // 当“越过根节点”或“节点无须修复”时，结束堆化
      if (p < 0 || this.array[i] <= this.array[p]) break;
      // 交换两节点
      this.swap(i, p);
      // 循环向上堆化
      i = p;
    }
  }

  /* 元素出堆 */
  pop(): number {
    // 判空处理
    if (this.isEmpty()) throw new RangeError('Heap is empty.');
    // 交换根节点与最右叶节点（即交换首元素与尾元素）
    this.swap(0, this.size - 1);
    // 删除节点
    const val = this.array.pop() as number;
    // 从顶至底堆化
    this.siftDown(0);
    // 返回堆顶元素
    return val;
  }

  /* 从节点 i 开始，从顶至底堆化 */
  siftDown(i: number): void {
    while (true) {
      // 判断节点 i, l, r 中值最大的节点，记为 ma
      const l = this.getLeft(i);
      const r = this.getRight(i);
      let target = i;
      if (l < this.size && this.array[l] > this.array[target]) target = l;
      if (r < this.size && this.array[r] > this.array[target]) target = r;
      // 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
      if (target === i) break;
      // 交换两节点
      this.swap(i, target);
      // 循环向下堆化
      i = target;
    }
  }
}

export const heapSort = (nums: number[]) => {
  const maxHeap = new MaxHeap(nums);
  const result = [];
  while (maxHeap.size) {
    result.unshift(maxHeap.pop());
  }
  return result;
};

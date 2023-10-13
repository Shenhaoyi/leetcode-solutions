// 数组实现大顶堆，参考https://www.hello-algo.com/chapter_heap/heap/
export class MaxHeap {
  array: number[];

  /* 构造方法，建立空堆或根据输入列表建堆 */
  constructor(nums: number[] = []) {
    // 将列表元素原封不动添加进堆
    this.array = [...nums];
    // 堆化除叶节点以外的其他所有节点(自底向上)
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

  /* 获取左子节点索引 */
  getLeft(i: number) {
    return 2 * i + 1;
  }

  /* 获取右子节点索引 */
  getRight(i: number) {
    return 2 * i + 2;
  }

  /* 获取父节点索引 */
  getParent(i: number) {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 访问堆顶元素 */
  peek() {
    return this.array[0];
  }

  swap(i: number, j: number) {
    if (i === j) return;
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  /* 元素入堆 */
  push(val: number) {
    // 添加节点
    this.array.push(val);
    // 从底至顶堆化
    this.siftUp(this.size - 1);
  }

  /* 从节点 i 开始，从底至顶堆化 */
  siftUp(i: number) {
    if (i < 1) return;
    const parent = this.getParent(i);
    if (this.array[i] > this.array[parent]) {
      this.swap(i, parent);
      this.siftUp(parent);
    }
  }

  /* 元素出堆 */
  pop() {
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

/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/*
  限制：只使用数组的 pop 和 push 来模拟栈，然后实现队列
  思路：出队列的时候，将输入 pop 出来，依次 push 进输出栈，在输出占中，先进来的元素就在栈顶了
    只要输出栈有元素，则这些元素就是最先进来的元素
    当输出栈没有元素，就将输入栈的元素压入输出栈
*/
class MyQueue {
  inStack = new Array<number>(); // 输入栈
  outStack = new Array<number>(); // 输出栈
  constructor() {}

  push(x: number): void {
    this.inStack.push(x);
  }

  moveInToOut() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
  pop(): number | undefined {
    if (!this.outStack.length) {
      this.moveInToOut();
    }
    return this.outStack.pop();
  }

  peek(): number | undefined {
    if (!this.outStack.length) {
      this.moveInToOut();
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return !this.outStack.length && !this.inStack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

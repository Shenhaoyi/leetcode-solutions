// 将from顶部移到to
function move(from: number[], to: number[]): void {
  if (from.length) {
    const pan = from.pop() as number;
    to.push(pan);
  }
  console.log('===================');
  console.log(towerA, towerB, towerC);
}

// 将 A 顶部 n 个圆盘借助 B 移到 C
const dfs = (n: number, A: number[], B: number[], C: number[]) => {
  if (n === 0) return;
  if (n === 1) {
    move(A, C);
    return;
  }
  // 前n-1个先放到B上
  dfs(n - 1, A, C, B);
  // 第n个放到c上
  move(A, C);
  // 将B上的n-1个放到C上
  dfs(n - 1, B, A, C);
};

const solveHanoi = (A: number[], B: number[], C: number[]) => {
  dfs(A.length, A, B, C);
};

const towerA = new Array(5).fill(0).map((_, index) => index);
const towerB: number[] = [];
const towerC: number[] = [];
solveHanoi(towerA, towerB, towerC);

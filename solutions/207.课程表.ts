/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
/*
  参考k神题解：https://leetcode.cn/problems/course-schedule/solutions/18806/course-schedule-tuo-bu-pai-xu-bfsdfsliang-chong-fa/
*/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 1、【x】~数据结构 map, 课程-先修课程列表，只能判断相互依赖的，超过3个形成的环就判断不到了~
  // 2、有向图，判断有向图中是否有环，prerequisites就是邻接表
  // 一般情况下，这个图是非连通图，所以遍历的时候要从所有没有入度的节点开始
  // 思路：BFS实现，将所有没有入度的节点都删掉，并删除这个节点与另外节点的边，最后剩下的就是一个环
  if (!length || numCourses === 1) return true;
  const inDegree = new Array(numCourses).fill(0); // 入度表
  const adjacency = Array.from({ length: numCourses }, () => [] as number[]); // 邻接表，存当前节点指向的节点
  const queue: number[] = []; // 队列，用于广度优先搜索。队列中的节点都是没有入度的，也就是不可能形成环的

  // 遍历获取节点的入度表和邻接表
  for (let [to, from] of prerequisites) {
    inDegree[to] += 1;
    adjacency[from].push(to);
  }

  // 放入没有入度的节点
  for (let i = 0; i < inDegree.length; i++) {
    const current = inDegree[i];
    if (current === 0) {
      queue.push(i);
    }
  }

  // 所有节点入栈处理，遍历一个节点后，将该节点从图中去掉，也就是将to节点的入度-1
  // 如果有环，则这个节点不可能会入队，会造成节点去掉到只剩一个环的情况！
  while (queue.length) {
    const current = queue.shift() as number;
    numCourses--;
    const toList = adjacency[current];
    for (const to of toList) {
      inDegree[to] -= 1; // 去掉current到to的连接
      if (inDegree[to] === 0) {
        queue.push(to);
      }
    }
  }

  return numCourses === 0;
}
// @lc code=end

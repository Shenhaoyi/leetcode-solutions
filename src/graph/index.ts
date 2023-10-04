/* 
  vertex: 顶点
  edge: 边
  adjacency matrix: 邻接矩阵
  degree: 度
  path: 路径
*/

/* 基于邻接矩阵实现的无向图类 */
class GraphAdjMatrix {
  vertexList: number[]; // 顶点列表
  adj: number[][]; // 邻接矩阵

  constructor(vertexList: number[], edges: number[][]) {
    this.vertexList = [];
    this.adj = [];
    // 添加顶点
    for (const val of vertexList) {
      this.addVertex(val);
    }
    // 添加边
    for (const e of edges) {
      this.addEdge(e[0], e[1]);
    }
  }

  /* 获取顶点数量 */
  size(): number {
    return this.vertexList.length;
  }

  /* 添加顶点 */
  addVertex(val: number): void {
    const n: number = this.size();
    // 向顶点列表中添加新顶点的值
    this.vertexList.push(val);
    // 在邻接矩阵中添加一行
    const newRow: number[] = new Array(n).fill(0);
    this.adj.push(newRow);
    // 在邻接矩阵中添加一列
    for (const row of this.adj) {
      row.push(0);
    }
  }

  /* 删除顶点 */
  removeVertex(index: number): void {
    if (index >= this.size()) {
      throw new RangeError('Index Out Of Bounds Exception');
    }
    // 在顶点列表中移除索引 index 的顶点
    this.vertexList.splice(index, 1);

    // 在邻接矩阵中删除索引 index 的列和行
    for (const row of this.adj) {
      row.splice(index, 1);
    }
    this.adj.splice(index, 1);
  }

  /* 添加边 */
  addEdge(i: number, j: number): void {
    // 索引越界与相等处理
    if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
      throw new RangeError('Index Out Of Bounds Exception');
    }
    // 在无向图中，邻接矩阵沿主对角线对称，即满足 (i, j) === (j, i)
    this.adj[i][j] = 1;
    this.adj[j][i] = 1;
  }

  /* 删除边 */
  removeEdge(i: number, j: number): void {
    // 索引越界与相等处理
    if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
      throw new RangeError('Index Out Of Bounds Exception');
    }
    this.adj[i][j] = 0;
    this.adj[j][i] = 0;
  }

  /* 打印邻接矩阵 */
  print(): void {
    console.log('顶点列表 = ', this.vertexList);
    console.log('邻接矩阵 =', this.adj);
  }
}

const adjMat = new GraphAdjMatrix(
  [1, 2, 3, 4, 5],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
  ],
);
adjMat.print();

adjMat.addVertex(6);
adjMat.print();

adjMat.removeVertex(5);
adjMat.print();

adjMat.addEdge(0, 1);
adjMat.print();

adjMat.removeEdge(0, 1);
adjMat.print();

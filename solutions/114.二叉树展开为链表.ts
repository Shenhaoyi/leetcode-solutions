/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
// 左边转链表，右边转链表，然后按照 root-左链表-右链表的顺序连接起来就行了
function flatten(root: TreeNode | null): void {
    if (!root) return;
    flatten(root.right);
    if (root.left /*左子树非空，则需要拼接*/) {
      flatten(root.left);
      /*
        找到左子树的最右边的，也就是反中序遍历的第一步(但是这里明显是已经转成链表了，直接.right到底就行)
          TODO:确认下这段代码放在 flatten 的前面和后面为什么又区别，真正二叉树先序遍历的最后一个元素也是.right到底找到的啊？
          回答：下面这个例子，就不能通过.right访问到先序遍历最后一个节点！
              1
           2     3
                4
      */
      let leftTail = root.left;
      while (leftTail && leftTail.right) {
        leftTail = leftTail.right;
      }

      // 拼接：注意，得先让左右子树先转链表，再进行拼接！！！还要注意赋值顺序
      leftTail.right = root.right;
      root.right = root.left;
      // 清空左子树
      root.left = null;
    }
}
// @lc code=end

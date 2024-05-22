/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/*
  利用 map 巧解：https://leetcode.cn/problems/lru-cache/solutions/841200/mapjie-fa-jian-dan-yi-dong-by-bella0929-8lpn
*/
class LRUCache {
  capacity: number;
  map = new Map<number, number>();
  constructor(capacity: number) {
    this.capacity = capacity;
  }
  get(key: number) {
    const value = this.map.get(key);
    if (value === undefined) {
      return -1;
    } else {
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
  }

  put(key: number, value: number) {
    const oldValue = this.map.get(key);
    if (oldValue !== undefined) {
      this.map.delete(key);
    } else {
      if (this.map.size === this.capacity) {
        // 删除第一个，即最久未使用的
        // 迭代器.next() 拿到的是 { value: unknown, done: boolean }
        this.map.delete(this.map.keys().next().value);
      }
    }
    this.map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// 参考https://leetcode.cn/problems/lru-cache/solutions/260362/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
// 双向链表才能实现O(1)的删除和添加，比如删除时能拿到前后，直接连上
class ListNode3 {
  value: number;
  key: number;
  next: ListNode3 | null;
  prev: ListNode3 | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// 使用 dummy node 简化操作
class DoublyLinkedList2 {
  dummyHead: ListNode3;
  dummyTail: ListNode3;

  constructor() {
    this.dummyHead = new ListNode3(-1, -1);
    this.dummyTail = new ListNode3(-1, -1);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  get isEmpty(): boolean {
    return this.dummyHead.next === this.dummyTail;
  }
  // 插到尾部
  append(node: ListNode3) {
    this.dummyTail.prev!.next = node;
    node.prev = this.dummyTail.prev;
    node.next = this.dummyTail;
    this.dummyTail.prev = node;
  }
  // 删除表头
  shift() {
    if (this.isEmpty) return null;
    const head = this.dummyHead.next!;
    this.deleteNode(head!);
    return head;
  }
  deleteNode(node: ListNode3) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}

class LRUCache2 {
  capacity: number;
  list = new DoublyLinkedList2();
  map = new Map<number, ListNode3>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get listSize() {
    return this.map.size;
  }

  get(key: number) {
    const node = this.map.get(key);

    if (node) {
      this.list.deleteNode(node);
      this.list.append(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.list.deleteNode(node);
      this.list.append(node);
    } else {
      const node = new ListNode3(key, value);
      if (this.listSize === this.capacity) {
        const head = this.list.shift();
        this.map.delete(head!.key);
      }
      this.list.append(node);
      this.map.set(key, node);
    }
  }
}

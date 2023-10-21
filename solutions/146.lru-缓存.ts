/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start

// 参考https://leetcode.cn/problems/lru-cache/solutions/260362/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
// 双向链表才能实现O(1)的删除和添加，比如删除时能拿到前后，直接连上

/* 没有完全通过，就这样吧，知道有这么个东西就行了 */
class ListNode3<T> {
  data: T;
  next: ListNode3<T> | null;
  prev: ListNode3<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList2<T> {
  head: ListNode3<T> | null = null;
  tail: ListNode3<T> | null = null;
  isEmpty(): boolean {
    return this.head === null;
  }
  // 插到尾部
  append(newNode: ListNode3<T>) {
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }
  // 删除表头
  shift() {
    if (!this.head) return;
    const oldHead = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (!this.head.next) {
        this.tail = this.head;
      }
    }
    this.clearNode(oldHead);
  }
  // 清空节点的链接
  clearNode(node: ListNode3<T>) {
    node.prev = null;
    node.next = null;
  }
  deleteNode(node: ListNode3<T>) {
    const { prev, next } = node;
    if (prev) {
      prev.next = next;
    }
    if (this.head === node) {
      this.head = node.next;
    }
    if (this.tail === node) {
      this.tail = node.prev;
    }
    this.clearNode(node);
  }
}

interface Data {
  key: number;
  value: number;
}

class LRUCache {
  capacity: number;
  list = new DoublyLinkedList2<Data>();
  map = new Map<number, ListNode3<Data>>();

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
      return node.data.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    const node = this.map.get(key);
    if (node) {
      node.data.value = value;
      this.list.deleteNode(node);
      this.list.append(node);
    } else {
      const node = new ListNode3({ key, value });
      if (this.listSize === this.capacity) {
        const head = this.list.head;
        this.map.delete(head!.data.key);
        this.list.shift();
      }
      this.list.append(node);
      this.map.set(key, node);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

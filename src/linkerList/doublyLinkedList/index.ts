// gpt：https://chat.openai.com/share/43e32e86-1a3c-4915-961c-c0e0d7207ba3
class ListNode2<T> {
  data: T;
  prev: ListNode2<T> | null;
  next: ListNode2<T> | null;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  private head: ListNode2<T> | null;
  private tail: ListNode2<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  // 插到尾部
  append(data: T) {
    const newNode = new ListNode2(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // 插到头部
  prepend(data: T) {
    const newNode = new ListNode2(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
  }

  delete(data: T) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// 示例用法
const list = new DoublyLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

list.print(); // 输出：0 1 2 3

list.delete(1);
list.print(); // 输出：0 2 3

// gpt：https://chat.openai.com/share/43e32e86-1a3c-4915-961c-c0e0d7207ba3
class ListNode<T> {
  data: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  // 插到尾部
  append(data: T) {
    const newNode = new ListNode(data);

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
    const newNode = new ListNode(data);

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
        /*
          A<=>B<=>C
             ||
             \/
            A<=>C
         */
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
    const result = Array<T>();
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  reversePrint() {
    let current = this.tail;
    const result = Array<T>();
    while (current !== null) {
      result.push(current.data);
      current = current.prev;
    }
    return result;
  }
}



class QueueNode<T = () => void> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T = () => void> {
  front: QueueNode<T> | null;
  back: QueueNode<T> | null;
  size: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return !this.size;
  }

  enqueue(value: T): void {
    const node = new QueueNode(value);

    if (!this.size) {
      this.front = node;
      this.back = node;
    } else {
      (this.back as QueueNode<T>).next = node;
      this.back = node;
    }

    this.size = this.size + 1;
  }

  dequeue(): T | null {
    if (!this.size) {
      return null;
    }

    if (this.size === 1) {
      this.back = null;
    }

    const value = (this.front as QueueNode<T>).value;
    this.front = (this.front as QueueNode<T>).next;
    this.size = this.size - 1;

    return value;
  }
}

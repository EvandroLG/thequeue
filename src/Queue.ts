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

  queue(value: T): void {
    const node = new QueueNode(value);
    this.size = this.size + 1;

    if (!this.size) {
      this.front = node;
      this.back = node;

      return;
    }

    (this.back as QueueNode<T>).next = node;
    this.back = node;
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

    return value;
  }
}

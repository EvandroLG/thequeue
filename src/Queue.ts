class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  front: any;
  back: any;
  size: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  queue(value: any): void {
    const node = new QueueNode(value);
    this.size = this.size + 1;

    if (!this.size) {
      this.front = node;
      this.back = node;
      return;
    }

    this.back.next = node;
    this.back = node;
  }

  dequeue(): any {
    if (!this.size) {
      return null;
    }

    if (this.size === 1) {
      this.back = null;
    }

    const value = this.front.value;
    this.front = this.front.next;

    return value;
  }
}

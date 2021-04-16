import { Queue } from './Queue';

type ReturnType = {
  register: (reslver: () => void) => void;
  start: () => void;
};

export default function thequeue(arr?: Array<() => void>): ReturnType {
  const queue = new Queue();

  if (arr?.length) {
    for (const item of arr) {
      queue.enqueue(item);
    }
  }

  return {
    register(resolver: () => void) {
      queue.enqueue(resolver);
    },

    start() {
      while (!queue.isEmpty()) {
        const fn = queue.dequeue();
        setTimeout(() => fn?.(), 1);
      }
    },
  };
}

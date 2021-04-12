import { Queue } from './Queue';

type TypeReturn = {
  register: (reslver: () => void) => void;
  start: () => void;
};

export default function jaguar(): TypeReturn {
  const queue = new Queue();

  return {
    register(resolver: () => void) {
      queue.enqueue(resolver);
    },

    start() {
      while (!queue.isEmpty()) {
        const fn = queue.dequeue();
        fn?.();
      }
    },
  };
}

import { Queue } from './Queue';

type TypeReturn = {
  register: (reslver: () => void) => void;
  start: () => void;
};

export default function jaguar(): TypeReturn {
  const list = new Queue();

  return {
    register(resolver: () => void) {
      list.queue(resolver);
    },

    start() {
      while (!list.isEmpty()) {
        const fn = list.dequeue();
        fn?.();
      }
    },
  };
}

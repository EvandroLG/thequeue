import { Queue } from '../src/Queue';

describe('queue', () => {
  test('enqueue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();

    const fn1 = () => undefined;
    const fn2 = () => undefined;
    const fn3 = () => undefined;

    queue.enqueue(fn1);
    queue.enqueue(fn2);
    queue.enqueue(fn3);

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size).toBe(3);
  });

  test('dequeue', () => {
    const queue = new Queue();

    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    queue.enqueue(fn1);
    queue.enqueue(fn2);
    queue.enqueue(fn3);
    expect(queue.size).toBe(3);
    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue()?.();
    expect(fn1).toHaveBeenCalled();
    expect(queue.size).toBe(2);
    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue()?.();
    expect(fn2).toHaveBeenCalled();
    expect(queue.size).toBe(1);
    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue()?.();
    expect(fn3).toHaveBeenCalled();
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });
});

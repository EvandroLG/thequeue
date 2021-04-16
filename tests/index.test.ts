import thequeue from '../src/';

jest.useFakeTimers();

describe('thequeue', () => {
  it('should register resolvers and run them by calling the `start` method', () => {
    const q = thequeue();

    const fn1 = jest.fn();
    q.register(fn1);
    const fn2 = jest.fn();
    q.register(fn2);
    const fn3 = jest.fn();
    q.register(fn3);

    q.start();
    jest.advanceTimersByTime(5);

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
    expect(fn3).toHaveBeenCalled();
  });

  it('should update queue with items provided in the function call', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    const q = thequeue([fn1, fn2, fn3]);
    q.start();
    jest.advanceTimersByTime(5);

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
    expect(fn3).toHaveBeenCalled();
  });
});

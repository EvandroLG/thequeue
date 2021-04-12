import jaguar from '../src/';

describe('jaguar', () => {
  it('should register resolvers and run them by calling the `start` method', () => {
    const q = jaguar();

    const fn1 = jest.fn();
    q.register(fn1);
    const fn2 = jest.fn();
    q.register(fn2);
    const fn3 = jest.fn();
    q.register(fn3);

    q.start();

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
    expect(fn3).toHaveBeenCalled();
  });
});

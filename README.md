# thequeue &middot; [![BuildStatus](https://travis-ci.org/EvandroLG/thequeue.svg?branch=master)](https://travis-ci.org/EvandroLG/thequeue) [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

Easy way to queue delayed callbacks. Designed to be used on both client and server-side.

## Install

To install `thequeue`, execute:

```sh
$ npm install @evandrolg/thequeue
```

or

```sh
$ yarn add @evandrolg/thequeue
```

## Usage

`thequeue` was designed to call functions that need to be invoked at a given time (e.g tracking functions that should be performed at a given time for performance reasons).
Its api is quite simple, as the example below shows:

```js
import thequeue from 'thequeue';

const q = thequeue();

const fn1 = () => console.log('fn1');
q.register(fn1);

const fn2 = () => console.log('fn2');
q.register(fn2);

const fn3 = () => console.log('fn3');
q.register(fn3);

q.start();
// the functions will be called in the order in which they were added to the queue.
```

`thequeue` was also developed with performance in mind and all registered functions are in a Queue that was implemented using a LinkedList. This means that the functions are registered in constant time and are processed (when the `start` method is invoked) in linear time, without adding any extra space in memory.

## TODO

- [ ] Add option to allow a function to be called only when the previous one has finished

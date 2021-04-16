# thequeue &middot; [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

Easy way to execute a callback queue.

## Install

To install `thequeue`, execute:

```sh
$ npm install thequeue
```

or

```sh
$ yarn add thequeue
```

## Usage

`thequeue` was designed to call functions that need to be invoked at a given time (e.g tracking logics that are collected during the user's navigation and can be performed later at once).
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

In addition to being simple to use, `thequeue` was also designed with performance in mind and all registered functions are in a LinkedList Queue. This means that the functions are registered in constant time and are processed (when the `start` function is invoked) in linear time, without adding any extra space in memory.

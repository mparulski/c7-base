# c7-base

Lightweight JavaScript utility library.

## Installation

Using npm:

```shell
npm i --save c7-base
```

## isFunction(value)

Checks if `value` is classified as a `function object`

```js
import isFunction from 'c7-base/isFunction'

isFunction(() => {})); // => true
isFunction({}); // => false
```

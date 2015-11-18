'use strict';

module.exports = function curry (fn) {

  return _curry(fn.length, fn);
}


function _curry (length, fn) {

  return  (...args) => {

    if (args.length === 0) {

      throw new Error(fn.name + ': called with no arguments');
    }

    if (args.length >= length) {

      return fn(...args);
    }
    else {

      return _curry(length - args.length, fn.bind(null, ...args));
    }

  }

}

# Super Curry

  Infinite curry


## Install

  ```
  npm install @ibrokethat/curry

  ```


## Usage

  ```
  import curry from '@ibrokethat/curry';

  let args4 = (a, b, c, d) => a + b + c + d;

  let fn = curry(args4);

  let fn1 = fn(1, 2);

  let result = fn1(3, 4);

  console.log(result); // -> 10

  ```

## Test

  ```
  git clone git@github.com/ibrokethat/super-curry
  cd super-curry
  npm i
  npm test
  ```


## License

(The MIT License)

Copyright (c) 2015 Simon Jefford <si@ibrokethat.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the 'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


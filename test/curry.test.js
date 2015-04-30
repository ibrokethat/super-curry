"use strict";

import assert from 'assert';
import sinon from 'sinon';
import underTest from '../src/curry';

import {expect} from 'chai';

let fakes;
let ctx;


describe("test curry module: ", () => {

  beforeEach(()  =>  {

    fakes = sinon.sandbox.create();

  });



  it('should curry a function which throws if called with no args', () => {


    let args2 = (a, b) => a + b;

    let fn = underTest(args2);

    expect(fn).to.throw;

  });


  it('should curry a 2 arg function and call it if called with exactly 2 args', () => {


    let args2 = (a, b) => a + b;

    let fn = underTest(args2);

    let result = fn(1, 2);

    expect(result).to.equal(3);

  });


  it('should curry a 2 arg function', () => {


    let args2 = (a, b) => a + b;

    let fn = underTest(args2);

    let fn1 = fn(1);

    let result = fn1(2);

    expect(result).to.equal(3);

  });


  it('should curry a 3 arg function', () => {


    let args3 = (a, b, c) => a + b + c;

    let fn = underTest(args3);

    let fn1 = fn(1);
    let fn2 = fn1(2);

    let result = fn2(3);

    expect(result).to.equal(6);

  });


  it('should curry a 4 arg function', () => {


    let args4 = (a, b, c, d) => a + b + c + d;

    let fn = underTest(args4);

    let fn1 = fn(1);
    let fn2 = fn1(2);
    let fn3 = fn2(3);

    let result = fn3(4);

    expect(result).to.equal(10);

  });


  it('should curry a 4 arg function with an initial 2 args followed by single args', () => {


    let args4 = (a, b, c, d) => a + b + c + d;

    let fn = underTest(args4);

    let fn1 = fn(1, 2);
    let fn2 = fn1(3);

    let result = fn2(4);

    expect(result).to.equal(10);

  });

  it('should curry a 4 arg function with an initial 2 args followed another 2 args', () => {


    let args4 = (a, b, c, d) => a + b + c + d;

    let fn = underTest(args4);

    let fn1 = fn(1, 2);

    let result = fn1(3, 4);

    expect(result).to.equal(10);

  });


  it('should curry a 4 arg function with an initial 3 args followed another args', () => {


    let args4 = (a, b, c, d) => a + b + c + d;

    let fn = underTest(args4);

    let fn1 = fn(1, 2, 3);

    let result = fn1(4);

    expect(result).to.equal(10);

  });


  it('should curry a 10 arg function - although you\'re doing it wrong with function signatures like this', () => {


    let args10 = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d +e + f + g + h +i +j;

    let fn = underTest(args10);

    let fn1 = fn(1);
    let fn2 = fn1(2);
    let fn3 = fn2(3);
    let fn4 = fn3(4);
    let fn5 = fn4(5);
    let fn6 = fn5(6);
    let fn7 = fn6(7);
    let fn8 = fn7(8);
    let fn9 = fn8(9);

    let result = fn9(10);

    expect(result).to.equal(55);

  });


  it('should curry a 4 arg function and still pass the ...args through', () => {


    let args4 = (a, b, c, d, ...args) => a + b + c + d + args.length;

    let fn = underTest(args4);

    let fn1 = fn(1, 2, 3);

    let result = fn1(4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    expect(result).to.equal(20);

  });


});

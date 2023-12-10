import { expect } from 'chai';
import toNumber from '../lib/src/toNumber.js';

describe('toNumber', () => {
  it('should convert a number to itself', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it('should convert a numeric string to a number', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('42')).to.equal(42);
    expect(toNumber('-123')).to.equal(-123);
  });

  it('should return NaN for symbol input', () => {
    expect(toNumber(Symbol('test'))).to.be.NaN;
  });

  it('should return NaN for non-numeric string input', () => {
    expect(toNumber('abc')).to.be.NaN;
  });

  it('should handle object input by using valueOf', () => {
    const obj = {
      valueOf: () => 42,
    };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should handle object input by using toString if valueOf is not present', () => {
    const obj = {
      toString: () => '42',
    };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should handle object input by converting to string if neither valueOf nor toString is present', () => {
    const obj = {
      a: 1,
      b: 2,
    };
    expect(toNumber(obj)).to.be.NaN;
  });

  it('should handle zero input correctly', () => {
    expect(toNumber(0)).to.equal(0);
    expect(toNumber('0')).to.equal(0);
  });

  // Add more test cases based on the specific behavior you want to test
});

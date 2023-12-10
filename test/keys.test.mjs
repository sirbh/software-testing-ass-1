import keys from '../lib/src/keys.js';
import { expect } from 'chai';

describe('keys', () => {
  it('should return an array of keys for an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(keys(obj)).to.deep.equal(['a', 'b', 'c']);
  });

  it('should return an array of keys for an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(keys(arr)).to.deep.equal(['0', '1', '2']);
  });

  it('should return an empty array for an empty object', () => {
    const emptyObj = {};
    expect(keys(emptyObj)).to.deep.equal([]);
  });

  it('should return an array of keys for an object with prototype properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const fooInstance = new Foo();
    expect(keys(fooInstance)).to.deep.equal(['a', 'b']);
  });

  it('should return an array of keys for a string', () => {
    const str = 'hello';
    expect(keys(str)).to.deep.equal(['0', '1', '2', '3', '4']);
  });

  it('should return an empty array for null or undefined', () => {
    expect(keys(null)).to.deep.equal([]);
    expect(keys(undefined)).to.deep.equal([]);
  });

});

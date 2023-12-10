import { expect } from 'chai';
import map from '../lib/src/map.js';

describe('map', () => {
  it('should apply the iteratee function to each element in the array', () => {
    const square = (n) => n * n;
    const result = map([4, 8], square);
    expect(result).to.deep.equal([16, 64]);
  });

  it('should handle an empty array', () => {
    const square = (n) => n * n;
    const result = map([], square);
    expect(result).to.deep.equal([]);
  });

  it('should handle an array of objects', () => {
    const users = [{ 'user': 'barney' }, { 'user': 'fred' }];
    const keyExtractor = (obj) => obj.user;
    const result = map(users, keyExtractor);
    expect(result).to.deep.equal(['barney', 'fred']);
  });

  it('should handle iteratee with index and array arguments', () => {
    const addIndexAndArray = (value, index, array) => value + index + array.length;
    const result = map([1, 2, 3], addIndexAndArray);
    expect(result).to.deep.equal([4, 6, 8]);
  });

  it('should return an empty array for null or undefined input', () => {
    const square = (n) => n * n;
    expect(map(null, square)).to.deep.equal([]);
    expect(map(undefined, square)).to.deep.equal([]);
  });

});

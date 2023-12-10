import { expect } from 'chai';
import countBy from '../lib/src/countBy.js';

describe('countBy', () => {
  it('should count elements based on the result of the iteratee function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = countBy(users, value => value.active);
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });

  it('should handle an empty array', () => {
    const result = countBy([], value => value);
    expect(result).to.deep.equal({});
  });

  it('should handle a collection of numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd');
    expect(result).to.deep.equal({ 'odd': 3, 'even': 2 });
  });

  it('should handle a collection of strings', () => {
    const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];
    const result = countBy(strings, value => value);
    expect(result).to.deep.equal({ 'apple': 2, 'banana': 2, 'orange': 1 });
  });

  it('should handle undefined values returned by the iteratee', () => {
    const collection = [1, 2, 3];
    const result = countBy(collection, () => undefined);
    expect(result).to.deep.equal({ 'undefined': 3 });
  });

  it('should handle null values returned by the iteratee', () => {
    const collection = [1, 2, 3];
    const result = countBy(collection, () => null);
    expect(result).to.deep.equal({ 'null': 3 });
  });

  it('should handle a collection of objects', () => {
    const objects = [{ 'a': 1 }, { 'a': 2 }, { 'a': 1 }];
    const result = countBy(objects, value => value.a);
    expect(result).to.deep.equal({ '1': 2, '2': 1 });
  });

});

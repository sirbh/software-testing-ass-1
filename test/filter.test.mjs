import { expect } from 'chai';
import filter from '../lib/src/filter.js';

describe('filter', () => {
  it('should filter elements based on the predicate function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
      { 'user': 'alice', 'active': true }
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }, { 'user': 'alice', 'active': true }]);
  });

  it('should handle an empty array', () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([]);
  });

  it('should handle predicate with index and array arguments', () => {
    const isEvenIndex = (value, index) => index % 2 === 0;
    const result = filter([1, 2, 3, 4, 5], isEvenIndex);
    expect(result).to.deep.equal([1, 3, 5]);
  });

  it('should handle null or undefined input', () => {
    const result1 = filter(null, () => true);
    expect(result1).to.deep.equal([]);

    const result2 = filter(undefined, () => true);
    expect(result2).to.deep.equal([]);
  });

});

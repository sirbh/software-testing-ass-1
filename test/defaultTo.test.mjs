import defaultTo from '../lib/src/defaultTo.js';
import { expect } from 'chai';
describe('defaultTo', () => {
  it('should return the value when it is not null or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo('hello', 'world')).to.equal('hello');
    expect(defaultTo(true, false)).to.equal(true);
  });

  it('should return the default value when the value is null or undefined', () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
    expect(defaultTo(null, 'default')).to.equal('default');
  });

  it('should return 0 when the value is 0', () => {
    expect(defaultTo(0, 10)).to.equal(0);
  });

  it('should return NaN when the value is NaN', () => {
    expect(defaultTo(NaN, 10)).to.be.NaN;
  });

  it('should return false when the value is false', () => {
    expect(defaultTo(false, true)).to.equal(false);
  });

  it('should return the default value when the value is an empty string', () => {
    expect(defaultTo('', 'default')).to.equal('default');
  });

});
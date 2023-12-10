import {expect} from "chai";
import isDate from '../lib/src/isDate.js';

describe('isDate', () => {
  it('should return true for a Date object', () => {
    expect(isDate(new Date())).to.be.true;
  });

  it('should return false for a string representing a date', () => {
    expect(isDate('Mon April 23 2012')).to.be.false;
  });

  it('should return false for a plain object', () => {
    expect(isDate({ key: 'value' })).to.be.false;
  });

  it('should return false for an array', () => {
    expect(isDate([1, 2, 3])).to.be.false;
  });

  it('should return false for a number', () => {
    expect(isDate(42)).to.be.false;
  });

  it('should return false for null', () => {
    expect(isDate(null)).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isDate(undefined)).to.be.false;
  });

});

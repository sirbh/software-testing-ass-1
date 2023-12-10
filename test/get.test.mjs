import { expect } from 'chai';
import get from '../lib/src/get.js';

describe('get function', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get value at path with dot notation', () => {
    expect(get(object, 'a[0].b.c')).to.equal(3);
  });

  it('should get value at path as an array', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('should return default value when path not found', () => {
    expect(get(object, 'x.y.z', 'default')).to.equal('default');
  });

  it('should return undefined when path not found and no default value provided', () => {
    expect(get(object, 'x.y.z')).to.be.undefined;
  });

  it('should handle null object and return default value', () => {
    expect(get(null, 'a.b.c', 'default')).to.equal('default');
  });

  it('should handle null object and return undefined without default value', () => {
    expect(get(null, 'a.b.c')).to.be.undefined;
  });

  it('should handle null default value', () => {
    expect(get(object, 'x.y.z', null)).to.be.null;
  });

  it('should handle object default value', () => {
    expect(get(object, 'x.y.z', { defaultValue: 'custom' })).to.deep.equal({ defaultValue: 'custom' });
  });

  it('should handle path with spaces in the key', () => {
    const objectWithSpaces = { 'key with space': 'value' };
    expect(get(objectWithSpaces, 'key with space')).to.equal('value');
  });

  it('should handle nested array', () => {
    const nestedArrayObject = { 'a': [[{ 'b': { 'c': 4 } }]] };
    expect(get(nestedArrayObject, 'a[0][0].b.c')).to.equal(4);
  });
});

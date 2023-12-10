import { expect } from 'chai';
import toString from '../lib/src/toString.js';

describe('toString', () => {
    
    it('should preserve the sign of -0', () => {
        expect(toString(-0)).to.equal('-0');
    });
    
    it('should convert an array to a string', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });
    
    it('should recursively convert nested arrays to strings', () => {
        const nestedArray = [1, [2, [3, [4]]]];
        expect(toString(nestedArray)).to.equal('1,2,3,4');
    });
    
    it('should convert symbols to strings', () => {
        const symbol = Symbol('test');
        expect(toString(symbol)).to.equal(symbol.toString());
    });
    
    it('should convert other values to strings', () => {
        expect(toString(42)).to.equal('42');
        expect(toString(true)).to.equal('true');
        expect(toString({ key: 'value' })).to.equal('[object Object]');
    });
    
    it('should handle undefined input', () => {
        expect(toString(undefined)).to.equal('');
    });
    
    it('should convert null to an empty string', () => {
      expect(toString(null)).to.equal('');
    });
});

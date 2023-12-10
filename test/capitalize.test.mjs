// import { expect } from 'chai';
// import capitalize from '../lib/src/capitalize.js';

// describe('capitalize', () => {
//   it('should capitalize the first character of a string', () => {
//     const result = capitalize('hello');
//     expect(result).to.equal('Hello');
//   });

//   it('should handle an empty string', () => {
//     const result = capitalize('');
//     expect(result).to.equal('');
//   });

//   it('should capitalize the first character and convert the rest to lowercase', () => {
//     const result = capitalize('tEst');
//     expect(result).to.equal('Test');
//   });

//   it('should handle strings with only one character', () => {
//     const result = capitalize('a');
//     expect(result).to.equal('A');
//   });

//   it('should handle strings with only one character and already capitalized', () => {
//     const result = capitalize('Z');
//     expect(result).to.equal('Z');
//   });

//   it('should handle strings with spaces and capitalize the first character after a space', () => {
//     const result = capitalize('hello world');
//     expect(result).to.equal('Hello world');
//   });

//   it('should handle non-string inputs by converting them to strings', () => {
//     const result = capitalize(123);
//     expect(result).to.equal('123');
//   });
// });
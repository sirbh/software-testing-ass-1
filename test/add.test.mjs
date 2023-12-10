import {expect} from 'chai';
import sum from '../lib/src/add.js';

describe('#sum()', function() {

    // add a test hook
    beforeEach(function() {
      // ...some logic before each test is run
    })
  
    // test a functionality
    it('should add numbers', function() {
      // add an assertion
      expect(sum(1+14)).to.equal(15);
    })
  
    // ...some more tests
  
  })
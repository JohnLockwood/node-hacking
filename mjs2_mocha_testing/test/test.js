import sum from '../sum.js';
import assert from 'assert';
import {expect} from 'chai';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('sum', function() {
    describe('it should sum values correctly()', function() {
      it('should sum positive values correctly', function() {
        assert(sum(1,2) == 3);
      });
      it('should sum positive + negative values correctly', function() {
        assert(sum(-1,2) == 1);
      });
      it('should sum all negative values correctly', function() {
        assert(sum(-1,-2) == -3);
      });
      it('should sum positive values correctly (chai version)', function() {
        expect(sum(1,2)).to.equal(3);
      });
      it('should sum positive + negative values correctly (chai version)', function() {
        expect(sum(-1,2)).to.equal(1);
      });
      it('should sum all negative values correctly, (chai version)', function() {
        expect(sum(-1,-8)).to.equal(-9);
      });

    });
  });



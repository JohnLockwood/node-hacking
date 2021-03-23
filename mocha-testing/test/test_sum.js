var assert = require('assert');
var sum = require('../sum');
var expect = require('chai').expect;

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



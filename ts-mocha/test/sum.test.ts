import  sum  from '../src/sum'; // this will be your custom import
import { expect } from 'chai';
import { describe } from 'mocha'

describe('sum tests', () => { // the tests container
    it('adds a negative number correctly', () => { // the single test
        expect(sum(-2, 7)).to.equal(5);
    });
});
import { expect } from 'chai';
import { describe } from 'mocha';
import { LessonItem } from './model';

describe('model tests', () => { // the tests container
    it('can run a simple test', () => { // the single test
        expect(true).to.not.equal(false);
    });    
});


describe('LessonItem', () => { // the tests container
    it("has a type, which can't be an arbitrary string", () => { // the single test
        var li : LessonItem = new LessonItem()
        li.itemType = 'Dialog'
    });
});
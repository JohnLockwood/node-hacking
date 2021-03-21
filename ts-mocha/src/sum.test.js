"use strict";
exports.__esModule = true;
var sum_1 = require("./sum"); // this will be your custom import
var chai_1 = require("chai");
var mocha_1 = require("mocha");
mocha_1.describe('sum tests', function () {
    it('adds a negative number correctly', function () {
        chai_1.expect(sum_1["default"](-2, 7)).to.equal(5);
    });
});
//# sourceMappingURL=sum.test.js.map
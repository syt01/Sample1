"use strict";
var assert = require('power-assert');
var index_1 = require('./index');
describe('sample', function () {
    it("shoud add", function () {
        assert(index_1.add(1, 3) === 4);
    });
    it("shoud sub", function () {
        assert(index_1.sub(5, 4) === 1);
    });
});

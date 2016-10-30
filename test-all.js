"use strict";
var assert = require('power-assert');
var index_1 = require('./index');
describe('sample', function () {
    it("shoud add", function () {
        assert(index_1.add(1, 3) === 4);
    });
});

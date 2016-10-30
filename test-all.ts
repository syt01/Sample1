import * as mocha from 'mocha';
import * as assert from 'power-assert';

import { add, sub } from './index';

describe('sample', () => {

    it("shoud add", () => {

        assert(add(1, 3) === 4);

    });

    it("shoud sub", () => {

        assert(sub(5, 4) === 1);

    });

});




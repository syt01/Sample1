import * as mocha from 'mocha';
import * as assert from 'power-assert';

import { add } from './index';

describe('sample', () => {

    it("shoud add", () => {

        assert(add(1, 3) === 4);

    });
});




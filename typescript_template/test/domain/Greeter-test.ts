// LICENSE : MIT
"use strict";
import assert from "power-assert";
import { Greeter } from '../../src/domain/Greeter';

describe("Greeter-test", function () {
    it("says destination", function () {
        const greeter = new Greeter('Jim');
        const greet = greeter.greet();
        assert(greet.includes("Jim"));
    });
});

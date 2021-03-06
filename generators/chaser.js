"use strict";

const Repeat = require('../strategies/repeat');
const Shift = require('../strategies/shift');

function* chaser(initialFrame) {
    yield {
        frame: initialFrame.frame,
        repeat: initialFrame.repeat
    };
    let index = 0;
    while (true) {
        let pattern = [
            { strategy: Repeat(5) },
            { strategy: Shift() }
        ];
        yield pattern[index];
        index = (index + 1) % pattern.length;
    }
}

module.exports = chaser;
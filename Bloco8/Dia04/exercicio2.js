const assert = require('assert')

const sum = (...values) => {
    let result = 0;
    if (values.length > 0) {
        result = values.reduce((acc, value) => acc + value);
    }
    return result;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
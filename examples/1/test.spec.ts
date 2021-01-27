const is21 = require('./invisible-assertion')

test('is21 has throw error', () => {
    expect(() => {is21({ age: 2 })}).toThrow(Error);
});

test('is21 has return undefined', () => {
    expect(() => {is21({ age: 22 })}).not.toThrow(Error);
});

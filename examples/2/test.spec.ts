const fetch = require('./missing-assertions')

test('fetch should be return Fred value', () => {
    const result = fetch(42)

    expect(result.name).toEqual('Fred');
});

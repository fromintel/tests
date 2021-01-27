const curl = require('./quixotic')


/*
* curl. Тест проверяет только успешный сценарий, тем самым не защитившись от случаев failed.
Антипаттерны: Happy Path
* */
test('callback from curl should be called with happy pass', () => {
    const cb = jest.fn();
    curl('https://google.com', cb);
    expect(cb).toHaveBeenCalledWith(null, 'URL: ' + 'https://google.com' + ' returned: "' + 'some data!' + '"')
});

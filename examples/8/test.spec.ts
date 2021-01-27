const joinPath = require('./indecisive');

test('joinPath should be returned value by conditions', () => {
    const fragments = ['foo', 'bar', 'baz']

    const result = joinPath(fragments)

    if (process.platform === 'win32') {
        expect(result).toEqual('foo\\bar\\baz');
    } else {
        expect(result).toEqual('foo/bar/baz');
    }
});

test('joinPath should be returned value with some separator', () => {
    let fragments
    if (process.platform === 'win32') {
        fragments = ['\\foo\\', 'bar\\biz', 'baz\\']
    } else {
        fragments = ['/foo/', 'bar/biz', 'baz/']
    }

    const result = joinPath(fragments)

    if (process.platform === 'win32') {
        expect(result).toEqual('\\foo\\bar\\biz\\baz\\');
    } else {
        expect(result).toEqual('/foo/bar/biz/baz/');
    }
});

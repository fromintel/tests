const joinPath = require('./indecisive');


/*
* joinPath. В данном случае стоит отметить, что данная функция работает на
* основании глобальных данных, которые заточены под систему. Если абстрагироваться
* от конкретного случая, то проблема скорее в том, что мы привязываемся под локальные
* системы, энвы и т.д, которые могут быть сугубо индивидуальны для каждого пользователя.
* Более того, подобные тесты не должны существовать в принципе, так по факту тестируется
* функционал сторонних реализаций.
Антипаттерны: HiddenDependency

* */
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

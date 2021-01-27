// const _ = require('lodash');
//
// const is21 = require('./examples/1/invisible-assertion');
// const fetch = require('./examples/2/missing-assertions');
// const curl = require('./examples/3/quixotic');
// const { verifyCardholderZip, repo } = require('./examples/4/bury-the-lede');
// const pricingForCode = require('./examples/5/chafing');
// const incrementAge = require("./examples/6/complex-assertions");
// const toArabic = require("./examples/7/generative");
// const { codePricing, generateCode } = require('./examples/5/helper/forChafing');
// const joinPath = require("./examples/8/indecisive");
// const Stack = require("./examples/9/long");
// const setAttr = require("./examples/10/tangential");
//
// /*
// * в тесте нет явных проверок.
// /*
//  Тестируемый модуль не делает ничего, кроме выбрасывания ошибки в некоторых случаях. Так что явно проверять
//  случай «ошибки нет» не надо.
//  */
// test('is21 has throw error', () => {
//     expect(() => {is21({ age: 2 })}).toThrow(Error);
// });
//
// test('is21 has return undefined', () => {
//     expect(() => {is21({ age: 22 })}).not.toThrow(Error);
// });
//
//
// /* тесты не проверяют часть функционала тестируемого модуля. */
// /*
// Тестируемый модуль делает кучу несвязанных вещей. Функционал без тестов
// либо неважен, либо про него забыли, либо он не согласуется с
// названием модуля.
// Правильный путь: распределить лишнюю ответственность в отдельные модули.
//  *               Тестируемый модуль оставьте для их координации.
// */
// /*
// То, что делает модуль(функция), тяжело проверить целиком. Не добавлены
// проверки для сложных случаев, оставив часть функционала без тестов.
// Правильный путь: добавить проверки, если есть возможность и это не трудоемко.
//  *
//  *               Скорее всего, код остался без тестов, потому что его трудно
//  *               проверить. В этом случае возможно принять след. меры:
//  *                   1. функционал неважен, можно жить и без тестов;
//  *                   2. тестируемый модуль можно переписать так,
//  *                   чтобы возвращаемое значение или сайд-эффекты было легко
//  *                   проверить;
//  *                   3. возможно, это неудачное место и код без тестов стоит
//  *                   переместить.
// */
// test('fetch should be return Fred value', () => {
//     const result = fetch(42)
//
//     expect(result.name).toEqual('Fred');
// });
//
//
// /* тесты проверяют идеальные ситуации по пути наименьшего
//  * сопротивления, игнорируя ошибочные и краевые случаи */
// test('callback from curl should be called with happy pass', () => {
//     const cb = jest.fn();
//     curl('https://google.com', cb);
//     expect(cb).toHaveBeenCalledWith(null, 'URL: ' + 'https://google.com' + ' returned: "' + 'some data!' + '"')
// });
//
//
// /* подготовка теста настолько утомительна, что когда читатель добирается
//  * до проверок, он уже не помнит о чем тест */
// /* Если возможно, необходимо разделить сохранение, валидацию и логику,
//  *               работающую с этими моделями. В рамках фреймворков зачастую это сделать сложно либо невозможно.
//  *
//  *               Если так сделать не получается, необходимо вытащить логику в отдельный
//  *               модуль, работающий с объектами, похожими на модели. Возможно,
//  *               потеряется покрытие валидаций, но, скорее всего, оно
//  *               останется в других местах. */
// test('verifyCardholderZip should return true', () => {
//     const address = {street: '123 Sesame', city: 'Cbus', state: 'OH', zip: '42'}
//     repo.save(address)
//     const user = {
//         addressId: address.id,
//         name: 'Jane',
//         age: 12,
//         income: '$12.48'
//     }
//     repo.save(user)
//     const issuer = {bankName: 'Bank Co'}
//     repo.save(issuer)
//     const card = {
//         userId: user.id,
//         apr: 17.8,
//         number: '1234 0000 2828 4494',
//         ccv: 364,
//         issuerId: issuer.id
//     }
//     repo.save(card)
//
//     const result = verifyCardholderZip(card.id, '42')
//
//     expect(result).toBeTruthy();
// });
//
//
// /* тесты, в которых прослеживается попытка максимально убрать повторяющуюся
//  * информацию, несмотря на то, что читателям будет тяжело понять
//  * назначение и поведение тестов. */
//
// /* DRY ("Don't repeat yourself") — принцип дизайна ПО, из-за которого
//  *      разработчики чувствуют дискомфорт при виде повторов. Когда разработчики
//  *      видят повторяющийся код в тестах, срабатывает рефлекс — устранить
//  *      повторы, вытащив хелперы для тестов.
//  *
//  * Тесты используют внешние фикстуры и фабрики для создания стандартного
//  *      набора моделей в интеграционных тестах. Такой подход снимает боль
//  *      от тяжелой подготовки тестов с кучей зависимостей, но может быстро
//  *      превратиться в свалку: больше тестов, зависящих от них, —
//  *      больше сложности.
//  *
//  *      Становится непонятно, как тест использует тестируемый модуль.
//  *      Никто не может упростить эти абстракции без того, чтобы не сломать
//  *      другие тесты магическим образом.
//  */
// test('pricingForCode should be calculate pricing by first case', () => {
//     const code = generateCode.one()
//     const result = pricingForCode(code)
//
//     codePricing(result, code);
// })
// test('pricingForCode should be calculate pricing by second case', () => {
//     const code = generateCode.two()
//     const result = pricingForCode(code)
//
//     codePricing(result, code);
// })
// test('pricingForCode should be calculate pricing by third case', () => {
//     const code = generateCode.three()
//     const result = pricingForCode(code)
//
//     codePricing(result, code);
// })
//
//
// /* проверки состоят из нескольких строк кода. */
// /* Тестируемый модуль возвращает составной результат. В тесте отмечается,
//         что только часть этого результата имеет значение.
//  *      Например, тестируемый модуль добавляет свойства к огромному
//  *      внешнему объекту.
//  *
//  *      В результате та часть проверки, что выбирает нужные данные, быстро
//  *      обрастает логикой. Это запутывает читателя и вызывает вопросы:
//  *      а точно ли мы те данные выбрали?
//
//  95%+ проверок это "значение равно <X>" или "значение входит
//  *               в / включает в себя <X>". Сложные проверки с кучей логики
//  *               обычно можно заменить глубоким сравнением (например,
//  *               с помощью функций из underscore/lodash).
//
//  Тестируемый модуль возвращает значение и имеет несколько важных
//  *      сайд-эффектов. Придется написать кучу проверок, чтобы все это проверить.
//  *      Проблема здесь в нарушении принципа разделения команд и запросов:
//  *      https://en.wikipedia.org/wiki/Command–query_separation
//  *
//  *      Сложность проверок в тесте говорит нам о запахе в дизайне тестируемого
//  *      модуля.
//  *
//
//  Пример ниже немного пугает, если нет опыта работы с lodash. Суть в том, что
//  *   в возвращаемом объекте мы увеличиваем возраст людей во вложенных объектах,
//  *   представляющих фамильное дерево.
//  *
//  *   Проблема в том, что проверки вытаскивают нужные им данные вместо того,
//  *   чтобы проверить дерево целиком или частично.
//
//  */
// test('should be increment single person age', () => {
//     const people = [
//         {name: 'Jane', age: 39},
//         {name: 'John', age: 99}
//     ]
//     const results = incrementAge(people);
//
//     const jane = _.find(results, function (person) { return person.name === 'Jane' })
//     expect(jane.age).toEqual(40);
//
//     const john = _.find(results, function (person) { return person.name === 'John' })
//     expect(john.age).toEqual(100);
// });
// test('should be increment kids age of person', () => {
//     const people = [
//         {name: 'Joe', age: 42, kids: [
//                 {name: 'Jack', age: 8},
//                 {name: 'Jill', age: 7}
//             ]}
//     ]
//
//     const results = incrementAge(people)
//
//     const jack = _.find(results[0].kids, function (person) {
//         return person.name === 'Jack'
//     })
//     expect(jack.age).toEqual(9);
//
//     const jill = _.find(results[0].kids, function (person) {
//         return person.name === 'Jill'
//     })
//     expect(jill.age).toEqual(8);
// });
//
//
// /* тест генерирует проверки по набору входных и выходных значений. */
// /* Чаще всего генерирующие тесты пишут для функций, в которых данные
//  *      и логика запутаны в ветках if/switch. Из-за того, что тестируемый
//  *      модуль содержит кучу ветвлений и данных, в его тестах проверяется
//  *      куча случаев.
//  *
//  *      Если случаи кажутся повторяющимися, естественная реакция — попытаться
//  *      устранить повторы.
//  *
//  *      в избыточных, повторяющихся тестах обычно виноваты не тесты,
//  *               а тестируемый модуль. Сгенерированные проверки уменьшат
//  *               боль, но спрячут от нас необходимость разделить данные и логику
//  *               в дизайне тестируемого модуля.
//  *
//  * Сравнение полученного результата с примерами покрывает часть случаев
//  *      из обычно бесконечного набора входных и выходных данных. Некоторые
//  *      разработчики пытаются проверить так много случаев, что идея
//  *      сгенерировать проверки кажется отличной.
//  *
//  *      Тестирование всех возможных случаев — нереальная цель с сомнительными
//  *      преимуществами. Более того, генерирование проверок может усыпить
//  *      бдительность разработчиков: часто такие проверки генерируют кучу
//  *      ненужных случаев и забывают о краевых или ошибочных (потому что их
//  *      так просто не сгенерируешь).
//  *
//  *      Лечение: возьмите за правило добавлять тест, только если он упадет.
//  *               Так он поможет улучшить тестируемый модуль.
//  */
//
// test('generative', () => {
//     _.transform({
//         'I': 1,
//         'II': 2,
//         'III': 3,
//         'IV': 4,
//         'V': 5,
//         'VI': 6,
//         'VII': 7,
//         'VIII': 8,
//         'IX': 9,
//         'X': 10
//     }, function (test, arabic, roman) {
//         test['Roman numeral: ' + roman + ' => ' + arabic] = function () {
//             const result = toArabic(roman);
//
//             expect(arabic).toEqual(result)
//         }
//     })
// });
//
//
// /* Нерешительные тесты
//  *
//  * увлеченность примитивами или отсутствие контроля в тестах
//  */
// test('joinPath should be returned value by conditions', () => {
//     const fragments = ['foo', 'bar', 'baz']
//
//     const result = joinPath(fragments)
//
//     if (process.platform === 'win32') {
//         expect(result).toEqual('foo\\bar\\baz');
//     } else {
//         expect(result).toEqual('foo/bar/baz');
//     }
// });
//
// test('joinPath should be returned value with some separator', () => {
//     let fragments
//     if (process.platform === 'win32') {
//         fragments = ['\\foo\\', 'bar\\biz', 'baz\\']
//     } else {
//         fragments = ['/foo/', 'bar/biz', 'baz/']
//     }
//
//     const result = joinPath(fragments)
//
//     if (process.platform === 'win32') {
//         expect(result).toEqual('\\foo\\bar\\biz\\baz\\');
//     } else {
//         expect(result).toEqual('/foo/bar/biz/baz/');
//     }
// });
//
//
// /* Длинные тесты */
// test('should be full check Stack working', () => {
//     const subject = new Stack()
//
//     // Тесты Push
//     subject.push('A')
//     subject.push('B')
//     subject.push('C')
//
//     expect(subject.pop()).toEqual('C');
//     expect(subject.pop()).toEqual('B');
//     expect(subject.pop()).toEqual('A');
//
//     // Тесты Peek
//     subject.push('D')
//     subject.push('E')
//
//     expect(subject.peek()).toEqual('E');
//
//     subject.pop()
//
//     expect(subject.peek()).toEqual('D');
//
//     subject.pop()
//
//     // Тесты Depth
//     subject.push('F')
//     subject.push('G')
//
//     expect(subject.depth()).toEqual(2);
//
//     // Тесты Pop
//     subject.pop()
//     subject.pop()
//
//     expect(subject.depth()).toEqual(0);
//     expect(subject.pop()).toBeUndefined();
// })
//
//
// /* тесты по касательной */
// test('should be check noType case for the setAttr', () => {
//     const user = {}
//
//     setAttr(user, 'name', 'Fred')
//
//     expect(user.name).toEqual('Fred');
// })
//
// test('should be check if string type is correct for the setAttr', () => {
//     const user = {}
//
//     setAttr(user, 'name', 'Frida', 'string')
//
//     expect(user.name).toEqual('Frida');
// })
//
// test('should be check if string type isn\'t correct for the setAttr', () => {
//     const user = {}
//
//     expect(() => setAttr(user, 'age', 42, 'string')).toThrow(Error); /* 42 is not a string */
// })
//
// test('should be check if phone type correct for the setAttr', () => {
//     const user = {}
//
//     setAttr(user, 'mobile', '(614) 349-4279', 'phone')
//
//     expect(user.mobile).toEqual('(614) 349-4279');
// })
//
// test('should be check if phone type isn\'t correct for the setAttr', () => {
//     const user = {}
//
//     expect(() => setAttr(user, 'mobile', '1337', 'phone')).toThrow(Error); /* 42 is not a string */
// })
//
// test('should be check if invalid first phone character can not start with 1 for the setAttr', () => {
//     const user = {}
//
//     expect(() => setAttr(user, 'mobile', '(123) 456-7890', 'phone')).toThrow(Error);
// })
//
// test('should be check if simple Japanese phone number for the setAttr', () => {
//     const user = {}
//
//     setAttr(user, 'mobile', '090-1790-1357', 'phone')
//
//     expect(user.mobile).toEqual('090-1790-1357');
// })
//
// test('should be check if Japanese without the trunk for the setAttr', () => {
//     const user = {}
//
//     expect(() => setAttr(user, 'mobile', '90-1790-1357', 'phone')).toThrow(Error);
// })
//
// test('should be check if international Japanese phone number for the setAttr', () => {
//     const user = {}
//
//     setAttr(user, 'mobile', '011-81-90-1790-1357', 'phone')
//
//     expect(user.mobile).toEqual('011-81-90-1790-1357');
// })

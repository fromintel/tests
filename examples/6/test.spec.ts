const _ = require('lodash');
const incrementAge = require('./complex-assertions');


/*
* incrementAge. Первое на что стоит обратить внимание - тестируется определенные части объекта.
* Тем самым в тесте мы делаем различные манипуляции для того, чтобы найти эту часть объекта.
* Так же стоит отметить использование функции shuffle, которая тасует в массиве значения.
* Подобная логика была бы более логична в реализации отдельного функционала.
Антипаттерны: инспектор, упомянуть про Nitpicker
* */
test('should be increment single person age', () => {
    const people = [
        {name: 'Jane', age: 39},
        {name: 'John', age: 99}
    ]
    const results = incrementAge(people);

    const jane = _.find(results, function (person) { return person.name === 'Jane' })
    expect(jane.age).toEqual(40);

    const john = _.find(results, function (person) { return person.name === 'John' })
    expect(john.age).toEqual(100);
});
test('should be increment kids age of person', () => {
    const people = [
        {name: 'Joe', age: 42, kids: [
                {name: 'Jack', age: 8},
                {name: 'Jill', age: 7}
            ]}
    ]

    const results = incrementAge(people)

    const jack = _.find(results[0].kids, function (person) {
        return person.name === 'Jack'
    })
    expect(jack.age).toEqual(9);

    const jill = _.find(results[0].kids, function (person) {
        return person.name === 'Jill'
    })
    expect(jill.age).toEqual(8);
});

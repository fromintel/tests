const Stack = require('./long');


/*
* Stack. Данная реализация имеет явную проблему с читабельностью теста с точки
* зрения его проверок. Слишком много различных манипуляций и тестируемых кейсов,
* которые убивают один из главных принципов - простоту. Так же это может быть
* явным признаком того, что реализация функции имеет проблемы.
Антипаттерны: Gigant, FreeRide
* */
test('should be full check Stack working', () => {
    const subject = new Stack()

    // Тесты Push
    subject.push('A')
    subject.push('B')
    subject.push('C')

    expect(subject.pop()).toEqual('C');
    expect(subject.pop()).toEqual('B');
    expect(subject.pop()).toEqual('A');

    // Тесты Peek
    subject.push('D')
    subject.push('E')

    expect(subject.peek()).toEqual('E');

    subject.pop()

    expect(subject.peek()).toEqual('D');

    subject.pop()

    // Тесты Depth
    subject.push('F')
    subject.push('G')

    expect(subject.depth()).toEqual(2);

    // Тесты Pop
    subject.pop()
    subject.pop()

    expect(subject.depth()).toEqual(0);
    expect(subject.pop()).toBeUndefined();
})

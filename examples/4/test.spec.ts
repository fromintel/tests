const { verifyCardholderZip, repo } = require('./bury-the-lede');


/*
* verifyCardholderZip. В данном случае сама функция имеет в себе преобразования и форматироания.
* Для того, чтобы произвести окончательное тестирование, необходимо сделать
* массу подготовительных действий и сам тест по итогу теряет контекст того,
* что необходимо сделать в окончательно варианте. нарушен AAA
Антипаттерны: Mockery (потенциально), инспектор, чрезмерный Setup
* */
test('verifyCardholderZip should return true', () => {
    const address = {street: '123 Sesame', city: 'Cbus', state: 'OH', zip: '42'}
    repo.save(address)
    const user = {
        addressId: address.id,
        name: 'Jane',
        age: 12,
        income: '$12.48'
    }
    repo.save(user)
    const issuer = {bankName: 'Bank Co'}
    repo.save(issuer)
    const card = {
        userId: user.id,
        apr: 17.8,
        number: '1234 0000 2828 4494',
        ccv: 364,
        issuerId: issuer.id
    }
    repo.save(card)

    const result = verifyCardholderZip(card.id, '42')

    expect(result).toBeTruthy();
});

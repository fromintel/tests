const { verifyCardholderZip, repo } = require('./bury-the-lede');

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

const repo = {
    __items: {},
    nextId: 1,
    save: function (obj) {
        if (!obj.id) obj.id = repo.nextId++

        // Gotcha!
        if (obj.zip) validateAddress(obj)
        if (obj.addressId) validateUser(obj)
        if (obj.userId) validateCard(obj)

        repo.__items[obj.id] = obj
    },
    find: function (id) {
        return repo.__items[id]
    }
}

function validateAddress (address) {
    requireProperties(address, ['street', 'city', 'state'])
}

function validateUser (user) {
    requireProperties(user, ['name', 'age', 'income'])
}

function validateCard (card) {
    requireProperties(card, ['apr', 'number', 'ccv'])
    requireRelation(card, 'issuerId', 'bankName')
}

function requireProperties (obj, props) {
    props.forEach(function (prop) {
        if (!obj.hasOwnProperty(prop)) {
            throw new Error('ERROR: "' + prop + '" required on ' + JSON.stringify(obj))
        }
    })
}

function requireRelation (obj, idKey, prop) {
    const relation = repo.find(obj[idKey])
    if (!relation || !relation.hasOwnProperty(prop)) {
        throw new Error('ERROR: "' + prop + '" required on "' + idKey + '" of ' +
            JSON.stringify(obj))
    }
}


// result
function verifyCardholderZip (cardId, zip) {
    const card = repo.find(cardId)
    const user = repo.find(card.userId)
    const address = repo.find(user.addressId)

    return address.zip === zip
}

module.exports = { verifyCardholderZip, repo };

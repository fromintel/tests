const _ = require('lodash')

function incrementAge(people) {
    return _(_.cloneDeep(people)).map(function (person) {
        if (_.isNumber(person.age)) {
            person.age += 1
        }
        if (_.isArray(person.kids)) {
            person.kids = incrementAge(person.kids)
        }
        return person
    }).shuffle().value()
}

module.exports = incrementAge;

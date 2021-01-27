function setAttr (obj, name, value, type) {
    if (type) {
        let valid = true

        switch (type) {
            case 'string':
                valid = typeof value === 'string'
                break
            case 'phone':
                const northAmerican = /^\(?([2-9][0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                const japanese = /^0\d{2}-\d{4}-\d{4}$/
                const intlJapanese = /^011-81-\d{2}-\d{4}-\d{4}$/
                valid = value.match(northAmerican) ||
                    value.match(japanese) ||
                    value.match(intlJapanese)
                break
        }

        if (!valid) {
            throw new Error(value + ' is not a ' + type)
        }
    }

    obj[name] = value
}

module.exports = setAttr;

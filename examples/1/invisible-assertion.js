function is21 (person) {
    if (person.age < 21) {
        throw new Error('Sorry, adults only!')
    }
}

module.exports = is21;

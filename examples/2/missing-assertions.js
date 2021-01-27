function find (id) {
    if (id === 42) {
        return Object.create({ name: 'Fred' })
    }
}

function fetch (id) {
    const item = find(id)
    item.lastAccessedAt = new Date().getTime()
    return item
}

module.exports = fetch;

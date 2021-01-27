function joinPath (fragments) {
    let separator, pattern
    if (process.platform === 'win32') {
        separator = '\\'
        pattern = /\\+/g
    } else {
        separator = '/'
        pattern = /\/+/g
    }
    return fragments.join(separator).replace(pattern, separator)
}

module.exports = joinPath;

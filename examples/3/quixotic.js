function get (url, cb) {
    if (url.indexOf('https') !== 0) {
        cb(new Error('SSL only!'))
    } else {
        cb(null, 'some data!')
    }
}

function curl (url, cb) {
    get(url, function (err, data) {
        if (err) return cb(err)
        cb(null, 'URL: ' + url + ' returned: "' + data + '"')
    })
}

module.exports = curl;

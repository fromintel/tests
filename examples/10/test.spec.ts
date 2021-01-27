const setAttr = require('./tangential');

test('should be check noType case for the setAttr', () => {
    const user = {}

    setAttr(user, 'name', 'Fred')

    expect(user.name).toEqual('Fred');
})

test('should be check if string type is correct for the setAttr', () => {
    const user = {}

    setAttr(user, 'name', 'Frida', 'string')

    expect(user.name).toEqual('Frida');
})

test('should be check if string type isn\'t correct for the setAttr', () => {
    const user = {}

    expect(() => setAttr(user, 'age', 42, 'string')).toThrow(Error); /* 42 is not a string */
})

test('should be check if phone type correct for the setAttr', () => {
    const user = {}

    setAttr(user, 'mobile', '(614) 349-4279', 'phone')

    expect(user.mobile).toEqual('(614) 349-4279');
})

test('should be check if phone type isn\'t correct for the setAttr', () => {
    const user = {}

    expect(() => setAttr(user, 'mobile', '1337', 'phone')).toThrow(Error); /* 42 is not a string */
})

test('should be check if invalid first phone character can not start with 1 for the setAttr', () => {
    const user = {}

    expect(() => setAttr(user, 'mobile', '(123) 456-7890', 'phone')).toThrow(Error);
})

test('should be check if simple Japanese phone number for the setAttr', () => {
    const user = {}

    setAttr(user, 'mobile', '090-1790-1357', 'phone')

    expect(user.mobile).toEqual('090-1790-1357');
})

test('should be check if Japanese without the trunk for the setAttr', () => {
    const user = {}

    expect(() => setAttr(user, 'mobile', '90-1790-1357', 'phone')).toThrow(Error);
})

test('should be check if international Japanese phone number for the setAttr', () => {
    const user = {}

    setAttr(user, 'mobile', '011-81-90-1790-1357', 'phone')

    expect(user.mobile).toEqual('011-81-90-1790-1357');
})

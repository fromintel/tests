const pricingForCode = require('./chafing');
const { codePricing, generateCode } = require('./helper/forChafing');


/*
* codePricing. Проблема заключается в том, что под тесты были написаны
* автоматизированные функции, которые позволяют убрать повторение в тестах.
* Это добавляет лишние зависимости, а соответственно лишает гибкости.
* */
test('pricingForCode should be calculate pricing by first case', () => {
    const code = generateCode.one()
    const result = pricingForCode(code)

    codePricing(result, code);
})
test('pricingForCode should be calculate pricing by second case', () => {
    const code = generateCode.two()
    const result = pricingForCode(code)

    codePricing(result, code);
})
test('pricingForCode should be calculate pricing by third case', () => {
    const code = generateCode.three()
    const result = pricingForCode(code)

    codePricing(result, code);
})

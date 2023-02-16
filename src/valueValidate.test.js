const valueValidate = require('./valueValidate')
describe('validation value', () => {
    test( 'accepted values', () => {
        expect(valueValidate(50)).toBe(true)
        expect(valueValidate(1)).toBe(true)
        expect(valueValidate(99)).toBe(true)
    })

    test( 'boundary values to be true', () => {
        expect(valueValidate(0)).toBe(true)
        expect(valueValidate(100)).toBe(true)
    })

    test( 'unaccepted values be false', () => {
        expect(valueValidate(-1)).toBe(false)
        expect(valueValidate(101)).toBe(false)
    })
})

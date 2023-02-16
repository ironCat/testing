const mapArrToString = require('./mapArrToString')

describe('validation array', () => {
    test('accepted only', () => {
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3'])
    })

    test('accepted and other', () => {
        expect(mapArrToString([1,2, null, undefined, 'a'])).toEqual(['1','2'])
    })

    test('empty', () => {
        expect(mapArrToString([])).toEqual([])
    })

    test('zero not empty', () => {
        expect(mapArrToString([0])).not.toEqual([])
    })

    test('zero', () => {
        expect(mapArrToString([0])).toEqual(['0'])
    })
})
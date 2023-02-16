const square = require('./square')

describe('validation array', () => {
    beforeEach(() => {
           ads
        }
    )
    test('accepted only', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
    })
})

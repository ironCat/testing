const delay = require('./delay')

describe('validation async', () => {

    test('summ with async', async () => {
        const sum = await delay(() => 5+5, 1000)
        expect(sum).toBe(10)
    })
})
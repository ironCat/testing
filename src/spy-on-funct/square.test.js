const square = require('./square')

describe('validation number called', () => {

    test('to be called 1 time', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('to not be called 2 times', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).not.toBeCalledTimes(2)
    })

    test('to be called 0 times', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })
})

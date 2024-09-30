import { doMath } from '../../challenges/easy/test'

describe('Test test', () => {
    it('should return 20', () => {
        expect(doMath(10)).toEqual(20);
    })

    it('should return 30', () => {
        expect(doMath(20)).toEqual(30);
    })
})

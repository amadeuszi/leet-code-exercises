import { totalFruit } from '../total-fruit'

describe('Total fruits count', () => {
    test("simple scenario", () => {
        const count = totalFruit([3,3,3,1,2,1,1,2,3,3,4])
        expect(count).toBe(5)
    })
})
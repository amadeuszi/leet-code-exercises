import { minTimeToReach } from "../min-time-to-reach-last-room-2"

describe("minTimeToReachLastRoom", () => {
    test("simple small maze", () => {
        const result = minTimeToReach([[0, 4], [4, 4]])
        expect(typeof result).toBe("number")
        expect(result).toBe(7)
    })

    test("single cell maze", () => {
        const result = minTimeToReach([[0]])
        expect(result).toBe(0)
    })
})
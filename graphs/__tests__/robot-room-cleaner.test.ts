import { describe, it, expect } from '@jest/globals'
import { Robot, cleanRoom } from '../robot-room-cleaner'

describe('cleanRoom', () => {
    it('should clean all reachable cells from starting position 1 3', () => {
        const room = [
            [1,1,1,1,1,0,1,1],
            [1,1,1,1,1,0,1,1],
            [1,0,1,1,1,1,1,1],
            [0,0,0,1,0,0,0,0],
            [1,1,1,1,1,1,1,1]
        ]
        const robot = new Robot(room, 1, 3)

        cleanRoom(robot)
        
        const cleaned = robot.getCleaned()
        const expected = new Set([
            '1,0', '1,1', '1,2', '1,3', '1,4',
            '0,0', '0,1', '0,2', '0,3', '0,4',
            '2,2', '2,3', '2,4', '2,5', '2,6', '2,7',
            '3,3',
            '4,0', '4,1', '4,2', '4,3', '4,4', '4,5', '4,6', '4,7'
        ])
        
        expect(cleaned.size).toBe(expected.size)
        expected.forEach(cell => {
            expect(cleaned.has(cell)).toBe(true)
        })
    })
})

export class Robot {
    private x: number = 0
    private y: number = 0
    private direction: number = 0
    private room: number[][]
    private cleaned: Set<string> = new Set()
    
    constructor(room: number[][], startX: number = 0, startY: number = 0) {
        this.room = room
        this.x = startX
        this.y = startY
    }
    
    // Returns true if the cell in front is open and robot moves into the cell.
    // Returns false if the cell in front is blocked and robot stays in the current cell.
	move(): boolean {
        const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
        const [dx, dy] = directions[this.direction]
        const newX = this.x + dx
        const newY = this.y + dy
        
        if (newY >= 0 && newY < this.room.length && 
            newX >= 0 && newX < this.room[0].length && 
            this.room[newY][newX] === 1) {
            this.x = newX
            this.y = newY
            return true
        }
        return false
    }
	
    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
	turnRight() {
        this.direction = (this.direction + 1) % 4
    }
	
    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
	turnLeft() {
        this.direction = (this.direction + 3) % 4
    }
	
	// Clean the current cell.
	clean(): void {
        this.cleaned.add(`${this.x},${this.y}`)
    }
    
    getCleaned(): Set<string> {
        return this.cleaned
    }
} 
 
// 0 -> up
// 1 -> right
// 2 -> down
// 3 -> left

const hash = (x: number, y: number): string => `${x},${y}`

export function cleanRoom(robot: Robot) {
    const visited = new Set<string>()
    const move = new Map<string, number[]>
    let direction = 0
    let x = 0
    let y = 0

    const xDiff = [0, 1, 0, -1]
    const yDiff = [-1, 0, 1, 0]

    while (true) {
        let trials = 0
        robot.clean()
        visited.add(hash(x, y))
        for (let i = 0; i < 4; i++) {
            const nextX = x + xDiff[direction]
            const nextY = y + yDiff[direction]
            if (!visited.has(hash(nextX, nextY)) && robot.move()) {
                x = nextX
                y = nextY
                move.set(hash(x, y), [-xDiff[direction], -yDiff[direction]])
                break
            } else {
                trials++
                robot.turnRight()
                direction++
                direction = direction % 4
            }
        }
        if (trials === 4 && x === 0 && y === 0) {
            break
        }
        // backtrack
        if (trials === 4) {
            for (let i = 0; i < 4; i++) {
                const [backX, backY] = move.get(hash(x, y)) ?? [0, 0]
                if (xDiff[direction] === backX && yDiff[direction] === backY) {
                    break
                }
                robot.turnRight()
                direction++
                direction = direction % 4
            }
            robot.move()
            const [backX, backY] = move.get(hash(x, y)) ?? [0, 0]
            x = x + backX
            y = y + backY
        }
    }
};
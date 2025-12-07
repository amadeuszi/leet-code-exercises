import * as fs from 'fs';
import * as path from 'path';

interface Instruction {
  direction: 'L' | 'R';
  steps: number;
}

function parseInput(filePath: string): Instruction[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  return lines.map(line => {
    const direction = line[0] as 'L' | 'R';
    const steps = parseInt(line.slice(1), 10);
    return { direction, steps };
  });
}

const inputPath = path.join(__dirname, 'input2.txt');
const instructions = parseInput(inputPath);

let current = 50
let count = 0

for (let i = 0; i < instructions.length; i++) {
    const { direction, steps } = instructions[i]

    const diff = (direction === 'L' ? -steps : steps)
    current += diff

    if (direction === 'R') {
      const rotations = Math.floor(current / 100)
      count += rotations
    } else if (current <= 0) {
      const rotations = Math.floor(Math.abs(current) / 100)
      count += rotations
      if (current - diff > 0) {
        count++
      }
    }

    current = current % 100
    if (current < 0) {
        current = 100 + current
    }
}

console.log('Parsed instructions:', instructions.length);
console.log("answer", count)
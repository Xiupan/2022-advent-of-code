import { boxes, craneInstructions } from "./input.js";

/* 
[H]                 [Z]         [J]
[L]     [W] [B]     [G]         [R]
[R]     [G] [S]     [J] [H]     [Q]
[F]     [N] [T] [J] [P] [R]     [F]
[B]     [C] [M] [R] [Q] [F] [G] [P]
[C] [D] [F] [D] [D] [D] [T] [M] [G]
[J] [C] [J] [J] [C] [L] [Z] [V] [B]
[M] [Z] [H] [P] [N] [W] [P] [L] [C]
 1   2   3   4   5   6   7   8   9 
*/

// bottom to top
export const boxMap = {
  1: ["M", "J", "C", "B", "F", "R", "L", "H"],
  2: ["Z", "C", "D"],
  3: ["H", "J", "F", "C", "N", "G", "W"],
  4: ["P", "J", "D", "M", "T", "S", "B"],
  5: ["N", "C", "D", "R", "J"],
  6: ["W", "L", "D", "Q", "P", "J", "G", "Z"],
  7: ["P", "Z", "T", "F", "R", "H"],
  8: ["L", "V", "M", "G"],
  9: ["C", "B", "G", "P", "F", "Q", "R", "J"],
};

export const instructionsArray = craneInstructions.split("\n");
export const parseInstruction = (instruction) => {
  // move `number` boxes from `from` to `to`
  const instArr = instruction.split(" ");
  const numberToMove = parseInt(instArr[1]);
  const from = parseInt(instArr[3]);
  const to = parseInt(instArr[5]);
  return { numberToMove, from, to };
};

instructionsArray.forEach((instruction) => {
  const { numberToMove, from, to } = parseInstruction(instruction);
  const boxes = boxMap[from].splice(-numberToMove);
  boxMap[to] = [...boxMap[to], ...boxes];
});

export const lastBoxInEachRow = Object.values(boxMap).map(
  (row) => row[row.length - 1]
);
console.log(lastBoxInEachRow.join(""));

import { input } from "./input.js";

const rounds = input.split("\n");

// A is rock and B is paper and C is scissors
// X is rock and Y is paper and Z is scissors
// playing X awards 1, playing Y awards 2, playing Z awards 3

// X means lose
// Y means draw
// Z means win

// a tie is 3 points, a win is 6 points, a loss is 0 points

// construct a matrix of the possible outcomes
//   X Y Z
// A 3 6 0
// B 0 3 6
// C 6 0 3
const outcomes = {
  A: { X: 3 + 0, Y: 1 + 3, Z: 2 + 6 },
  B: { X: 1 + 0, Y: 2 + 3, Z: 3 + 6 },
  C: { X: 2 + 0, Y: 3 + 3, Z: 1 + 6 },
};

let totalScore = 0;
rounds.forEach((round) => {
  const [opponent, me] = round.split(" ");
  totalScore += outcomes[opponent][me];
});

console.log(totalScore);

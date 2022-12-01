import { puzzleInput } from "./input1.js";

const calorieArray = puzzleInput.split("\n").map(Number);
const elvesHashmap = {};

let elf = 0;
calorieArray.forEach((calories) => {
  if (!elvesHashmap[elf]) {
    elvesHashmap[elf] = 0;
  }

  elvesHashmap[elf] = elvesHashmap[elf] + calories;

  if (calories === 0) {
    elf++;
  }
});

const totalCalories = Object.values(elvesHashmap).sort((a, b) => b - a);
console.log(totalCalories[0]);

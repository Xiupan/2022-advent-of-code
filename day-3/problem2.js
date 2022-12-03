import { input, itemPriority } from "./input.js";
import _ from "lodash";

const arrayOfRucksacks = input.split("\n");

let totalScore = 0;

for (let index = 0; index < arrayOfRucksacks.length; index += 3) {
  const rucksack1 = arrayOfRucksacks[index];
  const rucksack2 = arrayOfRucksacks[index + 1];
  const rucksack3 = arrayOfRucksacks[index + 2];
  const wrongItem = _.intersection(
    rucksack1.split(""),
    rucksack2.split(""),
    rucksack3.split("")
  );
  const score = itemPriority[wrongItem.join("")];
  totalScore += score;
}
console.log(totalScore);

import { input, itemPriority } from "./input.js";
import _ from "lodash";

const arrayOfRucksacks = input.split("\n");

let totalScore = 0;
arrayOfRucksacks.forEach((rucksack) => {
  const midpoint = Math.floor(rucksack.length / 2);
  const rucksack1 = rucksack.slice(0, midpoint);
  const rucksack2 = rucksack.slice(midpoint);
  const wrongItem = _.intersection(rucksack1.split(""), rucksack2.split(""));
  const score = itemPriority[wrongItem.join("")];
  totalScore += score;
});
console.log(totalScore);

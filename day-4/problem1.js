import { input } from "./input.js";
import _ from "lodash";

const inputArray = input.split("\n");

let completeOverlaps = 0;
let partialOverlaps = 0;

inputArray.forEach((line) => {
  // each line is a set of two elves' tasks
  const elves = line.split(",");
  const firstElfTasks = elves[0].split("-").map(Number);
  const secondElfTasks = elves[1].split("-").map(Number);

  // parsing ranges into an array of numbers
  let firstElfTasksParsed = [];
  let secondElfTasksParsed = [];
  for (let index = firstElfTasks[0]; index <= firstElfTasks[1]; index++) {
    firstElfTasksParsed.push(index);
  }
  for (let index = secondElfTasks[0]; index <= secondElfTasks[1]; index++) {
    secondElfTasksParsed.push(index);
  }

  // finding overlaps
  const overlap = _.intersection(firstElfTasksParsed, secondElfTasksParsed);

  // we only care if there is any overlap at all, ignore zero overlaps
  if (overlap.length > 0) {
    partialOverlaps++;
    // if there is, check if it's a complete overlap
    if (
      overlap.length === firstElfTasksParsed.length ||
      overlap.length === secondElfTasksParsed.length
    ) {
      completeOverlaps++;
    }
  }
});

// for problem 1's answer
console.log(`${completeOverlaps} complete overlaps`);

// for problem 2's answer
console.log(`${partialOverlaps} partial overlaps`);

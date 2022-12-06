import { input } from "./input.js";

let targetIndex = 0;

for (let index = 0; index < input.length; index++) {
  if (index >= 13) {
    const start = index - 13;
    const end = index + 1;
    const uniqueArr = [...new Set(input.slice(start, end))];
    if (uniqueArr.length === 14) {
      targetIndex = end;
      break;
    }
  }
}

console.log(targetIndex);

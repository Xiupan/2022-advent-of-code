import { input } from "./input.js";

let targetIndex = 0;

for (let index = 0; index < input.length; index++) {
  if (index >= 3) {
    const start = index - 3;
    const end = index + 1;
    const uniqueArr = [...new Set(input.slice(start, end))];
    if (uniqueArr.length === 4) {
      targetIndex = end;
      break;
    }
  }
}
console.log(targetIndex);

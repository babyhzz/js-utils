function checkInteger(num?: number): void {
  if (typeof num === "number" && !Number.isInteger(num)) {
    throw new Error(`Expected number to be an integer, got ${num}`);
  }
}

/**
 * 生成 [min, max] 之间的随机整数， 包含 min 和 max
 * 传入一个参数时，该值为最大值，最小值默认为0
 * @param min 最小整数
 * @param max 最大整数
 * @returns 返回区间内的随机整数
 */
function randomInteger(min?: number, max?: number): number {
  checkInteger(min);
  checkInteger(max);

  if (min === undefined && max === undefined) {
    min = 0;
    max = 1;
  } else {
    if (max === undefined) {
      max = min;
      min = 0;
    }
  }

  // @ts-ignore
  return min + Math.floor(Math.random() * (max - min + 1));
}

// console.log(
//   randomInteger(),
//   randomInteger(-5),
//   randomInteger(5),
//   randomInteger(5, 1),
//   randomInteger(-5, -1)
// );

export default randomInteger;

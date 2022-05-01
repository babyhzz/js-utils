function checkInteger(num?: number): void {
  if (typeof num === "number" && !Number.isInteger(num)) {
    throw new Error(`Expected number to be an integer, got ${num}`);
  }
}

/**
 * 生成 [min, max] 之间的随机整数， 包含 min 和 max
 * 传入一个参数时，该值为最大值，最小值默认为 0
 * @param min 最小整数
 * @param max 最大整数
 * @returns 返回区间内的随机整数
 */
function randomInteger(min?: number, max?: number): number {
  checkInteger(min);
  checkInteger(max);

  if (min === undefined && max !== undefined) {
    throw new Error(`Max number is ${max}, but min number is undefined`);
  }

  if (min === undefined && max === undefined) {
    min = 0;
    max = 1;
  } else if (max === undefined) {
    max = min;
    min = 0;
  }

  if (min === undefined || max === undefined) {
    throw new Error("Internal error: both min and max are undefined");
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}

export default randomInteger;

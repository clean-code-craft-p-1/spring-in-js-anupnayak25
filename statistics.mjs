export function computeStatistics(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("numbers must be an array");
  }
  const nums = numbers.map((n) => Number(n)).filter((n) => !isNaN(n) && isFinite(n));
  if (nums.length === 0) {
    return { average: NaN, min: NaN, max: NaN };
  }

  // Sum using reduce
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return { average: sum / nums.length, min, max };
}

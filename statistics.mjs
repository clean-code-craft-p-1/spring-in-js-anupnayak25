export function computeStatistics(numbers, unit = "fahrenheit") {
  if (!Array.isArray(numbers)) {
    throw new TypeError("numbers must be an array");
  }
  let nums = numbers.map((n) => Number(n)).filter((n) => !isNaN(n) && isFinite(n));

  if (unit.toLowerCase() === "celsius") {
    nums = nums.map((celsius) => (celsius * 9) / 5 + 32);
  }

  if (nums.length === 0) {
    return { average: NaN, min: NaN, max: NaN };
  }

  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return { average: sum / nums.length, min, max };
}

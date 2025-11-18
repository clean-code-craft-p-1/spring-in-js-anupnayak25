export function computeStatistics(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("numbers must be an array");
  }
  if (numbers.length === 0) {
    return { average: NaN, min: NaN, max: NaN };
  }
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (const num of numbers) {
    const val = Number(num);
    if (Number.isNaN(val)) {
      return { average: NaN, min: NaN, max: NaN };
    }
    sum += val;
    if (val < min) min = val;
    if (val > max) max = val;
  }
  return { average: sum / numbers.length, min, max };
}

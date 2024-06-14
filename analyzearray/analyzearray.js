function analyzeArray(array = []) {
  if (array.some((element) => typeof element !== "number")) return "TYPE ERROR";

  array.sort();

  let average =
    array.reduce((total, num) => {
      return total + num;
    }, 0) / array.length;

  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;
  return { average: average, min: min, max: max, length: length };
}

export { analyzeArray };

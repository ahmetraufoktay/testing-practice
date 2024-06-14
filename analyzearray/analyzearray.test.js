import { analyzeArray } from "./analyzearray";

test("Normal Array(1)", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Normal Array(2)", () => {
  expect(analyzeArray([1, 3, 4, 2, 6])).toEqual({
    average: 3.2,
    min: 1,
    max: 6,
    length: 5,
  });
});

test("One Char Array", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("One Char Array(2)", () => {
  expect(analyzeArray([2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 1,
  });
});

test("String in Array", () => {
  expect(analyzeArray([1, 3, "2", 5])).toBe("TYPE ERROR");
});

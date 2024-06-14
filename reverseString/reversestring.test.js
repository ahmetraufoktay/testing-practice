import { reverseString } from "./reversestring";

test("Reverses String", () => {
  expect(reverseString("ReVerse")).toBe("esreVeR");
});

test("Reverses Strings with Spaces", () => {
  expect(reverseString("My Planet is Earth")).toBe("htraE si tenalP yM");
});

test("Does not reverse integers", () => {
  expect(reverseString(1234)).toBe(1234);
});

test("Reverses numbers as strings", () => {
  expect(reverseString("4567")).toBe("7654");
});

import { capitalize } from "./capitalize";

test("Only takes Strings (Number)", () => {
  expect(capitalize(1)).toBe(1);
});

test("Returns strings not starting with letters", () => {
  expect(capitalize("%abc")).toBe("%abc");
});

test("Returns strings starting with numbers", () => {
  expect(capitalize("1abc")).toBe("1abc");
});

test("Capitalizes first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalizes first letter(2)", () => {
  expect(capitalize("m+3'fn")).toBe("M+3'fn");
});

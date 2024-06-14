import { cipher } from "./ceasercipher";

test("Ciphers given text", () => {
  expect(cipher("abc", 3)).toBe("def");
});

test("Preserves letter CASE", () => {
  expect(cipher("HeLLo", 3)).toBe("KhOOr");
});

test("Preserves punctuation", () => {
  expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Preserves non-letters", () => {
  expect(cipher("hel#21", 3)).toBe("kho#21");
});

test("Returns non-strings", () => {
  expect(cipher(123, 3)).toBe(123);
});

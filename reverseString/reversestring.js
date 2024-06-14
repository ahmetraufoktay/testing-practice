function reverseString(string) {
  if (typeof string !== "string") return string;
  return string.split("").reverse().join("");
}

export { reverseString };

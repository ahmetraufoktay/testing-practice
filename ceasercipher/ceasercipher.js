function cipher(str, x) {
  if (typeof str !== "string") return str;

  const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"; // Modify the alphabet according to your LANGUAGE
  const splittedStr = str.split("");
  let finalstr = "";
  for (let i = 0; i < splittedStr.length; i++) {
    if (alphabet.includes(splittedStr[i]) == false) {
      finalstr += splittedStr[i];
      continue;
    }
    let letterIndex = alphabet.indexOf(splittedStr[i]);
    if (letterIndex + x * 2 > 51) {
      letterIndex -= 52;
    }
    finalstr += alphabet[letterIndex + x * 2];
  }
  return finalstr;
}

export { cipher };

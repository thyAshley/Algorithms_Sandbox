function CaesorCipher(s: string, shift: number) {
  let base = 97;
  let result = "";
  for (let char of s) {
    let ascii = char.charCodeAt(0);
    let shiftedAscii = (ascii - base + shift) % 26;
    result += String.fromCharCode(shiftedAscii + base);
  }
  console.log(result);
}

CaesorCipher("xyz", 2);

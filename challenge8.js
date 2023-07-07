function checkPart(part) {
  for (let i = 0; i < part.length; i++) {
    const part_ = part.substring(0, i) + part.substring(i + 1);
    if (part_ == [...part_].reverse().join("")) {
      return true;
    }
  }
  return false;
}

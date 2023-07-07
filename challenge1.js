function wrapping(gifts) {
  let wrapGift = [];
  gifts.forEach((gift) => {
    let wrap = "*".repeat(gift.length + 2);
    wrapGift.push(wrap + "\n*" + gift + "*\n" + wrap);
  });
  return wrapGift;
}

function getGiftsToRefill(a1, a2, a3) {
  const giftList = [...new Set([...a1, ...a2, ...a3])];

  let giftToRefillList = giftList.filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) == 1
  );

  return giftToRefillList;
}

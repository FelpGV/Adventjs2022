function distributeGifts(packOfGifts, reindeers) {
  let sumPackOfGiftsLength = packOfGifts.reduce((a, b) => a + b.length, 0);
  let sumReindeersLength = reindeers.reduce((a, b) => a + b.length * 2, 0);
  return Math.trunc(sumReindeersLength / sumPackOfGiftsLength);
}

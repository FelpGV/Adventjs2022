function countTime(leds) {
  let seconds = 0;
  let ledsOn = false;

  let ledsOnList = leds.slice();
  for (let i = 0; leds.includes(0); i++) {
    for (let j = 0; j < leds.length; j++) {
      if (leds[0] == 0 && leds[leds.length - 1] == 1) {
        ledsOnList[0] = 1;
        ledsOn = true;
      }
      if (leds[j] == 0 && leds[j - 1] == 1) {
        ledsOnList[j] = 1;
        ledsOn = true;
      }
    }

    if (ledsOn == true) {
      seconds += 7;
      ledsOn = false;
    }
    leds = ledsOnList.slice();
  }
  return seconds;
}

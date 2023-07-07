function countHours(year, holidays) {
  let hours = 0;
  holidays.forEach((holiday) => {
    let date = new Date(`${holiday}/${year}`).getDay();
    if (holiday != "12/31" && date != 0 && date != 6) {
      hours += 2;
    }
  });
  return hours;
}

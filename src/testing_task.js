/* eslint-disable no-unreachable */
/* eslint-disable no-console */
function angleBetweenClockHands(date) {
  const hour = date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const hAngle = 0.5 * (60 * hour + minutes);
  const mAngle = 6 * minutes;
  const angle = Math.abs(hAngle - mAngle);
  return angle * (Math.PI / 180);
  console.log(hour);
}

angleBetweenClockHands(Date.UTC(2016, 3, 5, 3, 0));

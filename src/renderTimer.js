export function renderTimer({ days, hours, minutes, seconds }) {
  const timerElem = document.querySelector('#timer');
  timerElem.innerHTML = "";
  const elems = `
    <div class="countdown">
      <div class="countdown-number">
        <span class="days countdown-time">${days}</span>
        <span class="countdown-text">Days</span>
      </div>
      <div class="countdown-number">
        <span class="hours countdown-time">${hours}</span>
        <span class="countdown-text">Hours</span>
      </div>
      <div class="countdown-number">
        <span class="minutes countdown-time">${minutes}</span>
        <span class="countdown-text">Minutes</span>
      </div>
      <div class="countdown-number">
        <span class="seconds countdown-time">${seconds}</span>
        <span class="countdown-text">Seconds</span>
      </div>
    </div>
`
  timerElem.insertAdjacentHTML("afterbegin", elems)

}
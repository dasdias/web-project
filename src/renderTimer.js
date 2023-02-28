export function renderTimer({ days, hours, minutes, seconds }, selector) {
	const timerElem = document.querySelector(selector);
	timerElem.innerHTML = "";
	let elemDays = `
		<div class="countdown-number">
			<span class="days countdown-time">${days}</span>
			<span class="countdown-text">Days</span>
		</div>	
	`;
	const elems = `
    <div class="countdown">
      ${days ? elemDays : ""}
      <div class="countdown-number">
        <span class="days countdown-time">${hours ? hours : "00"}</span>
        <span class="countdown-text">Hours</span>
      </div>	
      <div class="countdown-number">
        <span class="days countdown-time">${minutes ? minutes : "00"}</span>
        <span class="countdown-text">Minutes</span>
      </div>	
      <div class="countdown-number">
        <span class="days countdown-time">${seconds ? seconds : "00"}</span>
        <span class="countdown-text">Seconds</span>
      </div>	
    </div>
`
	timerElem.insertAdjacentHTML("afterbegin", elems)

}
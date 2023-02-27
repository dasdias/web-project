export function renderTimer({ days, hours, minutes, seconds }) {
	const timerElem = document.querySelector('.timer-output');
	timerElem.innerHTML = "";
	let elemDays = `
		<div class="countdown-number">
			<span class="days countdown-time">${days}</span>
			<span class="countdown-text">Days</span>
		</div>	
	`;
	// let elemHours = `
	// 	<div class="countdown-number">
	// 		<span class="days countdown-time">${hours}</span>
	// 		<span class="countdown-text">Hours</span>
	// 	</div>	
	// `;
	// let elemMinutes = `
	// 	<div class="countdown-number">
	// 		<span class="days countdown-time">${minutes}</span>
	// 		<span class="countdown-text">Minutes</span>
	// 	</div>	
	// `;
	// let elemSeconds = `
	// 	<div class="countdown-number">
	// 		<span class="days countdown-time">${seconds}</span>
	// 		<span class="countdown-text">Seconds</span>
	// 	</div>	
	// `;

	const elems = `
    <div class="countdown">
      ${days ? elemDays : ""}
      <div class="countdown-number">
        <span class="days countdown-time">${hours ? hours : "0"}</span>
        <span class="countdown-text">Hours</span>
      </div>	
      <div class="countdown-number">
        <span class="days countdown-time">${minutes ? minutes : "0"}</span>
        <span class="countdown-text">Minutes</span>
      </div>	
      <div class="countdown-number">
        <span class="days countdown-time">${seconds ? seconds : "0"}</span>
        <span class="countdown-text">Seconds</span>
      </div>	
    </div>
`
timerElem.insertAdjacentHTML("afterbegin", elems)

}
import { DateTime } from "./libs/luxon.js";
let timer;

// let _second = 1000;
// let _minute = _second * 60;
// let _hour = _minute * 60;
// let _day = _hour * 24;

export function runShowRemaining(firstDate, secondDate) {

	let upgradeTime = 321104000;
	let seconds = upgradeTime;
	function timerTick() {
		let year = Math.floor(seconds / 12 / 30 / 24 / 60 / 60);
		let month = Math.floor(seconds / 30 / 24 / 60 / 60);
		console.log(month);
		let days = Math.floor(seconds / 24 / 60 / 60);
		let hoursLeft = Math.floor((seconds) - (days * 86400));
		let hours = Math.floor(hoursLeft / 3600);
		let minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
		let minutes = Math.floor(minutesLeft / 60);
		let remainingSeconds = seconds % 60;
		function pad(n) {
			return (n < 10 ? "0" + n : n);
		}
		document.getElementById('countdown').innerHTML = `Лет ${pad(year)} : Месяцев  ${pad(month)} : Дней ${pad(days)} : Часов ${pad(hours)} : Минут ${pad(minutes)} : Секунд ${pad(remainingSeconds)}`;
		if (seconds == 0) {
			clearInterval(countdownTimer);
			document.getElementById('countdown').innerHTML = "Completed";
		} else {
			seconds--;
		}
	}
	timer = setInterval(timerTick, 1000);

}







import { DateTime } from "./libs/luxon.js";
import { renderTimer } from "./renderTimer.js";
let timer;
let timerMsc = 3453453475;
var endtime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// https://denis-creative.com/jstimer/

export function runShowTimer() {



	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	function updateClock() {
		const timerElem = document.querySelector('#timer');
		let t = getTimeRemaining(endtime);
		console.log(t)
		renderTimer(t);
		// days = t.days;
		// hours = ('0' + t.hours).slice(-2);
		// minutes = ('0' + t.minutes).slice(-2);
		// seconds = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);

}
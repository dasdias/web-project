import { DateTime, Duration } from "./libs/luxon.js";
import { renderTimer } from "./renderTimer.js";

let timeinterval;
let totalTimerMs;
// let timerMsc = 0;
// let endtime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// let endtime = new Date(Date.parse(new Date()) + 1 * 60 * 1000); // for endless timer
// https://denis-creative.com/jstimer/

export function diffDateTimer(firstDate, secondDate) {
	clearInterval(timeinterval);

	firstDate = DateTime.fromISO(firstDate);
	secondDate = DateTime.fromISO(secondDate);

	if (firstDate > secondDate)
		secondDate = [firstDate, firstDate = secondDate][0];


	totalTimerMs = secondDate.diff(firstDate);
	totalTimerMs.toObject(); //=> { months: 1 }
	console.log(totalTimerMs);
	timeinterval = setInterval(updateClock, 1000);
}

export function runShowTimer(time) {
	clearInterval(timeinterval);
	const arrTime = time.split(":");
	// console.log(arrTime);
	let dur = Duration.fromObject({ hours: arrTime[0], minutes: arrTime[1] });
	let timerMsc = dur.as('seconds') * 1000;
	// console.log(timerMsc);
	totalTimerMs = timerMsc


	timeinterval = setInterval(updateClock, 1000);


}

function getTimeRemaining() {
	// let t = totalTimerMs;
	// let t = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor((totalTimerMs / 1000) % 60);
	let minutes = Math.floor((totalTimerMs / 1000 / 60) % 60);
	let hours = Math.floor((totalTimerMs / (1000 * 60 * 60)) % 24);
	let days = Math.floor(totalTimerMs / (1000 * 60 * 60 * 24));
	// console.log(t);
	totalTimerMs = totalTimerMs - 1000;
	return {
		'total': totalTimerMs,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function updateClock() {
	const timerElem = document.querySelector('#timer');
	let t = getTimeRemaining();
	// console.log(t)
	renderTimer(t);
	// days = t.days;
	// hours = ('0' + t.hours).slice(-2);
	// minutes = ('0' + t.minutes).slice(-2);
	// seconds = ('0' + t.seconds).slice(-2);

	if (t.total <= 0) {
		stopTimer();
	}
}

updateClock();
timeinterval = setInterval(updateClock, 1000);

export function stopTimer() {
	clearInterval(timeinterval);
	renderTimer({})
}
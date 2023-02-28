import { DateTime, Duration } from "./libs/luxon.js";
import { renderTimer } from "./renderTimer.js";
import './libs/howler.min.js';

let timeinterval;
let totalTimerMs;
let selectorRender = '.timer-output';

var sound = new Howl({
	src: ['./sound/alarm-beep.mp3']
});



export function diffDateTimer(firstDate, secondDate, selector) {
	clearInterval(timeinterval);
	document.querySelector(selectorRender).innerHTML = '';
	selectorRender = selector;

	firstDate = DateTime.fromISO(firstDate);
	secondDate = DateTime.fromISO(secondDate);

	if (firstDate > secondDate)
		secondDate = [firstDate, firstDate = secondDate][0];

	totalTimerMs = secondDate.diff(firstDate);
	totalTimerMs.toObject();
	updateClock()
	timeinterval = setInterval(updateClock, 1000);
}

export function runShowTimer(time, selector) {
	clearInterval(timeinterval);
	document.querySelector(selectorRender).innerHTML = '';
	selectorRender = selector;
	const arrTime = time.split(":");
	let dur = Duration.fromObject({ hours: arrTime[0], minutes: arrTime[1] });
	let timerMsc = dur.as('seconds') * 1000;
	totalTimerMs = timerMsc
	updateClock()
	timeinterval = setInterval(updateClock, 1000);
}

function getTimeRemaining() {
	let seconds = Math.floor((totalTimerMs / 1000) % 60);
	let minutes = Math.floor((totalTimerMs / 1000 / 60) % 60);
	let hours = Math.floor((totalTimerMs / (1000 * 60 * 60)) % 24);
	let days = Math.floor(totalTimerMs / (1000 * 60 * 60 * 24));
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
	renderTimer(t, selectorRender);

	if (t.total <= 0) {
		sound.play();
		stopTimer('.timer-output');
	}
}

export function stopTimer(selector) {
	clearInterval(timeinterval);
	const timerElem = document.querySelector(selector);
	timerElem.innerHTML = '';
}
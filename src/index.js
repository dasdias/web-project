import "./index.html"
import "./scss/style.scss"
import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { diffDateTimer, runShowTimer, stopTimer } from "./timer.js"
import "./tabs.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const timerFormBtnStart = document.querySelector(".timer-form__btn-start");
const timerFormBtnStop = document.querySelector(".timer-form__btn-stop");
const timerForm = document.querySelector(".timer-form");
const timerFormResult = document.querySelector(".timer-form__result");


dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
	let { firstDate, secondDate } = event.target.elements;
	dateCalcResult.innerHTML = "";
	event.preventDefault();
	firstDate = firstDate.value, secondDate = secondDate.value;

	if (firstDate && secondDate) {
		const diff = diffDates(firstDate, secondDate); // 3
		diffDateTimer(firstDate, secondDate, '.datecalc__output')
		dateCalcResult.innerHTML = diffToHtml(diff); // 4
	} else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5

}

timerForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(timerForm);
	const timerValue = formData.get('timer')
	timerFormResult.innerHTML = "";
	if (!timerValue) {
		timerFormResult.innerHTML = "Введите время";
		return
	}
	runShowTimer(timerValue, '.timer-output')
})

timerFormBtnStop.addEventListener("click", (e) => {
	e.preventDefault();
	stopTimer('.timer-output')
})
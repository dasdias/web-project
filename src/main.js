import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { runShowRemaining } from "./timer.js"

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");


dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
	let { firstDate, secondDate } = event.target.elements;
	dateCalcResult.innerHTML = "";
	event.preventDefault();
	firstDate = firstDate.value, secondDate = secondDate.value;
	runShowRemaining(firstDate, secondDate)
	if (firstDate && secondDate) {
		const diff = diffDates(firstDate, secondDate); // 3
		// console.log(diff);
		dateCalcResult.innerHTML = diffToHtml(diff); // 4
	} else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5

}
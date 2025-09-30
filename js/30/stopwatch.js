let swStartTime = 0;
let swElapsed = 0;
let swTimerId = null;
const tickSpeedMs = 10;

const swMinutes = document.getElementById("swMinutes");
const swSeconds = document.getElementById("swSeconds");
const swMilliseconds = document.getElementById("swMilliseconds");

const btnStart = document.getElementById("swStart");
const btnStop = document.getElementById("swStop");
const btnReset = document.getElementById("swReset");

btnStart.addEventListener("click", () => {
	if (swTimerId) return; // En timer är redan igång! Starta inte en ny.
	swTimerId = setInterval(() => {
		swElapsed += tickSpeedMs;

		const ms = swElapsed % 1000;
		const sec = Math.floor(swElapsed / 1000) % 60;
		const min = Math.floor(swElapsed / 60000);

		//console.log("Millisekunder med modulo", ms);
		//console.log("Millisekunder utan modulo", swElapsed);
		/* console.log(
			"Sekunder som passerat utan modulo",
			Math.floor(swElapsed / 1000)
		);
		console.log("Sekunder som passerat med modulo", sec); */

		swMilliseconds.textContent = ms;
		swSeconds.textContent = sec;
		swMinutes.textContent = min;
	}, tickSpeedMs);
	btnStart.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = false;
});

btnStop.addEventListener("click", () => {
	if (!swTimerId) return; //Det finns ingen timer än så länge.
	clearInterval(swTimerId);
	swTimerId = null;
	btnStart.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;
});

btnReset.addEventListener("click", () => {
	clearInterval(swTimerId);
	swStartTime = 0;
	swElapsed = 0;
	swTimerId = null;
	btnStart.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = true;
});

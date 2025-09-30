let swStartTime = 0;
let swElapsed = 0;
let swElapsedTwo = 0;
let swTimerId = null;
const tickSpeedMs = 10;

const swMinutes = document.getElementById("swMinutes");
const swSeconds = document.getElementById("swSeconds");
const swMilliseconds = document.getElementById("swMilliseconds");

const swMinutesTwo = document.getElementById("swMinutes-2");
const swSecondsTwo = document.getElementById("swSeconds-2");
const swMillisecondsTwo = document.getElementById("swMilliseconds-2");

const btnStart = document.getElementById("swStart");
const btnStop = document.getElementById("swStop");
const btnReset = document.getElementById("swReset");

let millieSeconds = 0;
let seconds = 0;
let minutes = 0;

btnStart.addEventListener("click", () => {
	if (swTimerId) return; // En timer är redan igång! Starta inte en ny.
	swTimerId = setInterval(() => {
		swElapsed += tickSpeedMs;

		const ms = swElapsed % 1000;
		const sec = Math.floor(swElapsed / 1000) % 60;
		const min = Math.floor(swElapsed / 60000);

		swMilliseconds.textContent = ms;
		swSeconds.textContent = sec;
		swMinutes.textContent = min;
	}, tickSpeedMs);
	btnStart.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = false;
	/* 
    //Ett annat sätt att lösa uppgiften på där vi inte håller reda på tiden utan låter performance.now()
    //visa oss.
	let timeBeforeStart = performance.now();

	swTimerId = setInterval(() => {
		swElapsedTwo = performance.now() - timeBeforeStart;

		console.log(swElapsedTwo);

		const ms = swElapsedTwo % 1000;
		const sec = Math.floor(swElapsedTwo / 1000) % 60;
		const min = Math.floor(swElapsedTwo / 60000);

		swMillisecondsTwo.textContent = ms;
		swSecondsTwo.textContent = sec;
		swMinutesTwo.textContent = min;
	}, tickSpeedMs); */
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

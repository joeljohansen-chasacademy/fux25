console.log("Start");

let counter = 0;
const id = setInterval(() => {
	counter++;
	console.log("Räknare: " + counter);
	if (counter === 5) {
		clearInterval(id); // stoppa
	}
}, 300);

setTimeout(() => {
	console.log("2 sekunder har passerat");
}, 2000);

console.log("Slut");

function callbackFunctionExample(callbackFn) {
	return callbackFn();
}

console.log(
	callbackFunctionExample(() => {
		setTimeout(() => {
			console.log("Running callback function");
			return "hej";
		}, 2000);
	})
);

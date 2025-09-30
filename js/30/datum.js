console.log("Hej");

const dateElement = document.querySelector("#dateShower");

//let dateString = "Idag är " + date.getDate() + "/" + currentMonth;
setInterval(() => {
	const date = new Date();
	//console.log(date);
	const currentMonth = date.getMonth() + 1;

	let dateString = `Idag är ${date.getDate()}/${
		date.getMonth() + 1
	}, ${date.getSeconds()}`;

	dateElement.innerHTML = dateString;
}, 1000);

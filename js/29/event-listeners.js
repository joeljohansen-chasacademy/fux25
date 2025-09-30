const button = document.querySelector("#btn");
console.log("Vår knapp är: ", button);

button.addEventListener("click", (event) => {
	console.log(event);
	console.log("Någon tryckte på knappen!");
});

const input = document.querySelector("#nameInput");

input.addEventListener("input", (e) => {
	console.log("Target är: ", e.target);
	console.log("Namnet är: ", e.target.value);
});

const text = document.querySelector("#hoverMe");

text.addEventListener("mouseover", () => {
	console.log("Muspekaren rörde sig in i textrutan");
});

text.addEventListener("mouseout", () => {
	console.log("Muspekaren rörde sig utanför texten");
});

text.addEventListener("click", () => {
	console.log("Någon klickade på texten");
});

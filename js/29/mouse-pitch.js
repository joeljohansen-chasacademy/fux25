const text = document.querySelector("#hoverMe");
let audioStarted = false;

const button = document.querySelector("#btn");
button.addEventListener("click", async () => {
	if (!audioStarted) {
		console.log("Starting audio context");
		await Tone.start();
		audioStarted = true;
		console.log("Audio context started");
	}
});

const players = new Tone.Players({
	urls: {
		"audio-file-1": "audio/S-F%233_1.mp3",
		"audio-file-2": "audio/S-F%233_2.mp3",
		"audio-file-3": "audio/S-F%233_3.mp3",
		"audio-file-4": "audio/S-F%233_4.mp3",
	},
	onload: () => {
		console.log("Audio files loaded");
	},
}).toDestination();

const audioKeys = [
	"audio-file-1",
	"audio-file-2",
	"audio-file-3",
	"audio-file-4",
];

text.addEventListener("mouseover", (event) => {
	const rect = event.target.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const width = rect.width;
	const pitch = (x / width) * 2;

	const randomIndex = Math.floor(Math.random() * audioKeys.length);
	const randomKey = audioKeys[randomIndex];
	const player = players.player(randomKey);

	player.playbackRate = pitch;
	player.start();
});

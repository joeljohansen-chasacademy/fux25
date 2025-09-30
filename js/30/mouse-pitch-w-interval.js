// För att detta ska funka behöver ni ladda in Tone.js i en scripttagg (se index.html)

const text = document.querySelector("#div-instrument");
let audioStarted = false;

const button = document.querySelector("#start-audio-context-button");
button.addEventListener("click", async () => {
	if (!audioStarted) {
		console.log("Starting audio context");
		await Tone.start();
		audioStarted = true;
		console.log("Audio context started");
	}
});

// Ladda alla ljudfiler
const buffers = new Tone.ToneAudioBuffers(
	{
		"audio-file-1": "../audio/S-F%233_1.mp3",
		"audio-file-2": "../audio/S-F%233_2.mp3",
		"audio-file-3": "../audio/S-F%233_3.mp3",
		"audio-file-4": "../audio/S-F%233_4.mp3",
	},
	() => {
		console.log("Audio files loaded");
	}
);

const audioKeys = [
	"audio-file-1",
	"audio-file-2",
	"audio-file-3",
	"audio-file-4",
];

text.addEventListener("mouseover", (event) => {
	if (!audioStarted) {
		console.log("Du måste klicka på starta ljudmotor-knappen");
		return;
	} //Om vi inte har klickat på "Starta ljudmotor-knappen" så avsluta funktionen
	console.log(buffers);
	if (!buffers.loaded) {
		console.log("Ljudfilerna har inte laddat än");
		return;
	} // Om ljudfilerna inte har laddats, avsluta funktionen.

	// Mappa mouse X till en playback rate (0.01 -> 2x över elementets bredd)
	const rect = event.target.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const width = rect.width;
	const pitch = Math.max(0.01, (x / width) * 2);

	// Välj ett random buffer från vår array av buffers.
	const randomKey = audioKeys[Math.floor(Math.random() * audioKeys.length)];
	const buf = buffers.get(randomKey); // Hämtar ut vår ljudfil

	// Skapa en ny ljudspelare och sätt "playbackrate", alltså hur snabbt ljudet ska spelas upp
	const src = new Tone.ToneBufferSource({
		url: buf,
		playbackRate: pitch,
	}).toDestination();

	//Starta ljudspelaren
	src.start();
	//När ljudspelaren är klar, ta bort den ur minnet (för att hantera minne)
	src.onended = () => src.dispose();
});

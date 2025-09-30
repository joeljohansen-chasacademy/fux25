function greet(name) {
	return "Hej " + name;
}
/* 
const greetArrowFunction = (name) => {
	//return greet(name);
	return "Hej " + name;
}; */

const greetArrowFunction = (name) => "Hej " + name;

console.log(greet("FUX25"));
console.log(greetArrowFunction("Joel"));

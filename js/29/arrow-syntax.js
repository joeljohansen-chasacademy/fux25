const doubleExplicit = (x) => {
	return x * 2;
};
console.log(doubleExplicit(4));

const doubleImplicit = (x) => x * 2;

//const add = (a, b) => a + b;

const sayHello = () => {
	return "Hello!";
};
console.log(sayHello());

const makeUser = (name) => {
	console.log("Name in function is:", name);
	//console.log(`Name in function is: ${name}`);
	return { name: name };
};
console.log(makeUser("Joel"));
/* 
function makeUserRegularFunction(name) {
	console.log(name);
} */

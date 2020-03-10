
const assert = require('chai').assert;
// const sayHello = require('../appsut').sayHello;
// const addNumbers =  require('../appsut').addNumbers;
const appsut =  require('../appsut');

//Results
sayHelloResult = appsut.sayHello();
addNumbersResult = appsut.addNumbers(5,5);

describe('appsut', () => {
	
	//sayHello
	describe('sayHello', () => {
		it('sayHello should retun Hello', () => {
		//let result = appsut.sayHello();
			assert.equal(sayHelloResult, "Hello");
		});

		//returning a STRING type
		it('sayHello should return type string', () => {
			//let result = appsut.sayHello();
			assert.typeOf(sayHelloResult, 'string')
		});

	});

	//addNumbers
	describe('addNumbers', () => {
		//returning resuots of above 5
		it('addNumbers should be above 5', () => {
			//let result = appsut.addNumbers(5,5);
			//let result = addNumbers(1,1);// fail
			assert.isAbove(addNumbersResult, 5);
		});

			//returning a NUMBER type
		it('addNumbers should return type number', () => {
			//let result = appsut.addNumbers();
			assert.typeOf(addNumbersResult, 'number');
		});
	});

	
});
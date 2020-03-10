
const assert = require('chai').assert;
const appsRPS =  require('../appsRPS');

//Results
winResult = appsRPS.win();
loseResult = appsRPS.lose();
drawResult =  appsRPS.draw();

describe('appsRPS', () => {
	
	//sayHello
	describe('win', () => {
		it('win should return "rs, pr or sp"', () => {
		//let result = appsut.sayHello();
			assert.equal(winResult, "rs, pr or sp");
		});

		//returning a STRING type
		it('win should return type string', () => {
			//let result = appsut.sayHello();
			assert.typeOf(winResult, 'string')
		});

	});

	//lose
	describe('lose', () => {
		it('lose should return "rp, ps or sr"', () => {
		//let result = appsut.sayHello();
			assert.equal(loseResult, "rp, ps or sr");
		});

		//returning a STRING type
		it('loseResult should return type string', () => {
			//let result = appsut.sayHello();
			assert.typeOf(loseResult, 'string')
		});
	});

		//lose
	describe('draw', () => {
		it('draw should return "rr, pp or ss"', () => {
		//let result = appsut.sayHello();
			assert.equal(drawResult, "rr, pp or ss");
		});

		//returning a STRING type
		it('draw should return type string', () => {
			//let result = appsut.sayHello();
			assert.typeOf(drawResult, 'string')
		});
	});
	
});
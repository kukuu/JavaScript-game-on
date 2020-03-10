//1. Rock, Paper, Scissors unit-test with Mocha Framework and Chai assertion library

// 2. npm instal gulp, mocha and chai libraries

//Configure gulp to use Mocha

// Gulp is test runner

//Test suits
//SMOKE TEST
//TIE (DRAW)
//a (user) wins
//B (comp) wins

//3. a = user, b = comp

//4. rockPaperScissors.js = app.js

//First run a SMOKE test to reveal that out tests are wired up correctly

//command: gulp mocha

//RETURNed strings

//user wins = a = user beats comp


//a win combination option= 
// r and s
// p and r
// s and p


//b wins combination  options
// user loses to comp
//r and  p
//p and s
//s and r

//TIE (DRAW)
//Options
// r and 
// p and p
// s s

let rockPaperScissors = require('./app-sut.js');
let expect = require('chai').expect;

//SMOKE test
describe.only('rockPaperScissors', () => {

	describe('smoke tests', () => {
		it('should exist', () => {
			expect(rockPaperScissors).to.exist;
		});

		it('should be a function', () => {
			expect(rockPaperScissors).to.be.a('function')
		});
	})
//draw
	describe('draw conditions', () => {
		it('should return draw on "rr"' , () => {
			expect(rockPaperScissors('rr')).to.equal('draw');
		});

		it('should return draw on "pp"' , () => {
			expect(rockPaperScissors('pp')).to.equal('draw');
		});

		it('should return draw on "ss"', () => {
			expect(rockPaperScissors('ss')).to.equal('draw');
		});

	});

//User winning
	describe('player "user" winning', () => {
		it('shoud return "user" on  "rs"', () => {
			expect(rockPaperScissors('rs')).to.equal('user');
		});

		it('shoud return "user" on  "pr"', () => {
			expect(rockPaperScissors('pr')).to.equal('user');
		});

		it('shoud return "user" on  "sp"', () => {
			expect(rockPaperScissors('sp')).to.equal('user');
		});

	});

//computer winning

	describe('player "comp" winning', () => {
		it('shoud return "comp" on  "rp"', () => {
			expect(rockPaperScissors('rp')).to.equal('comp');
		});

		it('shoud return "comp" on  "ps"', () => {
			expect(rockPaperScissors('ps')).to.equal('comp');
		});

		it('shoud return "comp" on  "sr"', () => {
			expect(rockPaperScissors('sr')).to.equal('comp');
		});
	});

});


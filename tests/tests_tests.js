"use strict";
var chai = require('chai')
	,   expect = chai.expect;



describe("tests", function(){
	it("will pass", function(){
		var a = 1;

		expect(a).to.equal(1);
	});
	it("will super pass", function(){
		var a = 1;
		expect(a).to.equal(1);
	});
	it.skip("will pend", function(){
		var a = 1;
		expect(a).to.equal(1);
	});
	it.skip("will pend", function(){
		var a = 1;
		expect(a).to.equal(1);
	});
});




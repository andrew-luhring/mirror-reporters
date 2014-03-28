/*jshint expr: true, newcap: false */

"use strict";

var Mocha = require('mocha')
	,   fs = require('fs')
	,   path = require('path')
	,   GlassMocha = require('../lib/reporters/glass-mocha.js')
	,   chai = require('chai');

var expect = chai.expect
	,   assert = chai.assert
	,   should = chai.should
	,   mocha = new Mocha({
			ui: 'tdd'
		,   require : 'chai'
		});
	mocha.reporter = Mocha.reporters.JSON;
var globalRunner = mocha.run;


// register reporter with mocha
	Mocha.reporters.GlassMocha = GlassMocha;

describe("GlassMocha", function(){
	var _glass = GlassMocha;

	it("will return the same thing as another runner", function(){
		var passing = {
					suites : 1
				,   tests : 3
				,   passes : 1
				,   failures : 0
				,   pending: 1
				};
		console.log(globalRunner);

		var glass = new _glass();


	});


	it.skip("should have a method on which returns a function which should return the event it was passed", function(){
		var runner = mocha.run()
			,	glass = new _glass(runner)
			,   on = glass.on('start')
			,   runnerOn = runner.on('end', function(){});

		//console.log(on);
		console.log(Mocha.reporters);
		expect(on).to.be.ok;
		expect(glass).to.respondTo('on');
		expect(glass).itself.to.respondTo('on');
	});
	it.skip("should have a stats object with properties suite, test, passes, pending and failures", function(){
		var runner = mocha.run()
			,	glass = new _glass(runner);
		//glass.stats = {suites: 1, tests: 1, passes: 1, pending: 0, failures: 0};
		expect(glass).property('stats').property('suites');
		expect(glass).property('stats').property('tests');
		expect(glass).property('stats').property('passes');
		expect(glass).property('stats').property('pending');
		expect(glass).property('stats').property('failures');
	});
	it("should show all possible events", function(){
		var glass = new _glass({on: function(){}});
		expect(glass.kees()).to.be.instanceof(Array);
	});
	it("should return an object", function(){
		var  glass = new _glass({ on: function(){} });
		expect(glass).to.be.an('object');
	});
});
describe('Mocha', function(){
	var run = mocha.run();
	it('will do something when I call run', function(){
		expect(run).to.exist;
	});
	it("exists", function(){
		expect(mocha).to.exist;
	});
	it("is an object", function(){
		expect(mocha).to.be.an('object');
	});
});



//suite('Mirror', function() {
//	var runner, on, log;
//
//	});
//});
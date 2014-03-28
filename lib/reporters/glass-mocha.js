"use strict";

/**
 * Module dependencies.
 */
var Mocha = require ('mocha')
//, EventEmitter = require ('events').EventEmitter
		, Base = Mocha.reporters.Base
		, util = require ('util');

/**
 * Expose `Glass Reporter`.
 */

exports = module.exports = GlassReporter;

/**
 * Initialize a new JSON reporter.
 * @constructor
 * @param {Runner} runner mocha test runner.
 */
/*function JSONReporter (runner) {
	var self = this;
	Base.call (this, runner);
	var tests = []
			, failures = []
			, passes = [];

	runner.on ('test end', function (test) {
		tests.push (test);
	});

	runner.on ('pass', function (test) {
		passes.push (test);
	});

	runner.on ('fail', function (test) {
		failures.push (test);
	});

	runner.on ('end', function () {
		var obj = {
			stats: self.stats, tests: tests.map (clean), failures: failures.map (clean), passes: passes.map (clean)
		};
		process.stdout.write (JSON.stringify (obj, null, 2));
	});
}*/


/**
 * Initialize a new Glass reporter.
 * @constructor
 * @param {Runner} runner mocha test runner.
 */
function GlassReporter (runner, debug) {
	Base.call (this, runner);
	var self = this
			, tests = []
			, test = {
			};
	if(!debug){
		var debug_mode = debug;
		debug_mode = true;
	}

/*	runner.on ('start', function (obj) {
		//console.log ("starting");
	});
	runner.on ('test start', function () {
		//console.log ("test starting");
	});
	runner.on ('suite', function () {
		//console.log ("suiting?");
	});
	runner.on ('test end', function () {
		//console.log ("test ending");
	});
	runner.on ('pass', function () {
		//console.log ("passing");
	});
	runner.on ('fail', function () {
		//console.log ("failing");
	});
	runner.on ('end', function () {
		//console.log ("ending");
	});
	runner.on ('pending', function () {
		//console.log ("pending");
	});*/



	/**
	 * Expose runner.on to testing.
	 * @constructor
	 * @param {Runner} runner mocha test runner.
	 */
	this.on = function(event){

		var thing = runner.on(event, function(event){
			console.log(runner._globals);
		});

		//return thing;

//		if(runner.on(event, function(){})){
//			return runner.on(event, function(){});
//		} else {
//			return false;
//		}
	}
	this.kees = function(log){
		if(log){  console.log(this);  }
		return Object.keys(this);
	}

	if(debug_mode){
		return this;
	}
}




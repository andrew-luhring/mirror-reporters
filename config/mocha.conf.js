// Mocha configuration
var Mocha = require("mocha");
"use strict";
var mocha = 	new Mocha({
			ui: 'bdd'
		,   require : 'expect.js'
		,   colors : true
		,   reporter : 'nyan'	
		,   growl : true
		,   bail : false
	});



module.exports = mocha;
	
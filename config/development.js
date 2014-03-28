"use strict";


var client = require('./client.json').web;

var config =  (function(client){
	return {
			port: 4567
		,   client_id : client.client_id
		,   sessionSecret: ''
		,   client_secret: client.client_secret
		,   redirect_uris: client.redirect_uris
		,   scope : client.scope
	};
})(client);



module.exports = config;
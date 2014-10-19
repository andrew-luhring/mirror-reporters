"use strict";

var express = require ('express'),
		http = require ('http'),
		fs = require ('fs'),
		async = require ('async'),
		path = require ("path"),
		config = require ('./config/development.js'),
		hbs = require ('hbs'),
		app = express (),
		server,
    str;


// sets up mirror api
app.locals.mirrorClient = require ('mirror-api-client') ({
	clientId    : config.client_id,
	clientSecret: config.client_secret,
	redirectUri : config.redirect_uris[0],
	scope       : config.scope
});

// Allow node to be run with proxy passing
app.enable ('trust proxy');

// View templating & rendering through handlebars.js
app.set ('view engine', 'html').
    set ('views', __dirname + '/app/views');

app.engine ('html', hbs.__express);
hbs.registerPartials (__dirname + '/app/views/partials');


// Compression (gzip), body parsing, URL encoding
app.use (express.compress ()).
    use (express.methodOverride ()).
    use (express.urlencoded ()).
    use (express.json ()).

// Session setup
    use (express.cookieParser (config.session_secret || 'mirror-glass-secret')).
    use (express.session ()).

// CSRF for XSS protection - populates req.csrfToken()
    use (express.csrf ());

// Logging config
app.configure ('local', function () {
	app.use (express.errorHandler ({ dumpExceptions: true, showStack: true }));
}).
    configure ('development', function () {
	app.use (express.errorHandler ({ dumpExceptions: true, showStack: true }));
}).
    configure ('production', function () {
	app.use (express.errorHandler ());
});


// Pre-route handling
app.use (function (req, res, next) {
	res.locals.message    = req.session.message;
	res.locals.csrfToken  = req.csrfToken ();
	//console.log('pre-route call, res.locals.message = ' + res.locals.message);
	next ();
});


// Setup routes
require ('./app/routes') (app);

// Error handling
app.use (function (err, req, res, next) {
	console.log ('Error handler called with error:', err);
	if (!req.session.userId) {
    return res.redirect (req.app.locals.mirrorClient.getAuthUrl ());}
	res.locals.message = err || res.locals.message;
	res.locals.alert = (err ? 'danger' : 'success');
	return res.render ('index');
}).

// Public static assets served from /public directory
    use ("/public", express.static (__dirname + '/public'));


server = http.createServer(app).listen( config.port);

str = "" + new Date ().toString () +
        "\n:: glasstasks server listening on port   :: " + server.address().port +
        "\n:: environment                           :: " + app.settings.env + "\n"

console.log(str);
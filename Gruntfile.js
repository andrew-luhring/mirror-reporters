module.exports = function(grunt) {
	"use strict";
	var   ASSETS_DIR =  "public/"
		,   STYLE_DIR =  ASSETS_DIR + "css/"
		,   SCSS_DIR = ASSETS_DIR + "scss/"
		,   STYLEGUIDE_DIR = ASSETS_DIR + "styleguide/"
		,   JS_DIR = ASSETS_DIR + 'js/'
		,   TEST_DIR =  'tests/'
		,   LIB_DIR = ASSETS_DIR + 'lib/'
		,   BUNDLE_DIR = ASSETS_DIR + 'min/'
		,   VIEWS_DIR = './'
		,   LAYOUTS_DIR = VIEWS_DIR + 'layouts/'
		,   HBS_PARTIALS_DIR = VIEWS_DIR + 'partials/' ;

	var  cssF = STYLE_DIR  + "style.css"
		,   scssF = SCSS_DIR + "style.scss"
		,   styleguideF = LAYOUTS_DIR + 'styleguide.hbs'


	var simplebuild = require("./extensions/simplebuild-ext-gruntify.js")(grunt);
	var config = 	{
		pkg: grunt.file.readJSON('package.json')
		,   sass: {
				dist : {
					files: {},
					options: sassOptions()
				}
		}
		,   shell: {
				start: {
					options: {
						stdout: true
					},
					command: 'grunt karma:unit:start watch'
				}
			}
		,   jsdoc : {
				dist : {
					src: [
						JS_DIR + "*.js"
						,   TEST_DIR + "*.js"
					]
					, options: {
						destination: 'doc'
					}
				}
			}
		,   jshint:     {
				files : {
						src: [ JS_DIR + "*.js", TEST_DIR + "*.js"]
					}
			,	options: lintOptions()
			}
		,   karma: {
				unit: {
					configFile: './config/karma.conf.js'
				,   background: true
				}
			}
		,   styleguide: {
				docco: {
					options: {
						framework:{
							name: 'styledocco',
							options: {
								gfm : true
							,   tables : true
							,   breaks : true
							,   smartLists: true
							}
						}
					,   name: 'doccoV'
					}
				,   files: {
						'./assets/styleguide/styledocco' : 'assets/scss/*.scss'
					}
				}
			,   kss: {
					options: {
						framework:{
							name: 'kss'
						}
					,   name: 'kssV'
					}
					,   files: {
						'./assets/styleguide/kss' : 'assets/scss/*.scss'
					}
				}
			}
		,   Mocha: {
				files: [ TEST_DIR + "*.js", '!**/node_modules/**']
			,   exclude: ["node_modules/*", "./node_modules/"]
			}
		,   watch:{
					lint : {
						files : [
							JS_DIR + "*.js"
						,   ASSETS_DIR + 'main.js'
						,	TEST_DIR + "*.js"
						]
					,   tasks: [ 'jshint' ]
					}
				,   karma: {
							files : [
							TEST_DIR + "*.js"
							,   JS_DIR + "*.js"
						]
						,   tasks: ['karma:unit:run:start watch'] //NOTE the :run flag
					}
//				,   test : {
//						files: [
//							TEST_DIR + "*.js"
//							,   JS_DIR + "*.js"
//						]
//					,   tasks: [
//							'karma'
//						]
//					}
				,   guide : {
						files: ['./README.md']
					,   tasks: ['styleguide:docco']
					}
				,   style : {
						tasks: ['sass:dist', 'styleguide:docco']
					,	files: [SCSS_DIR + "**/*.scss", SCSS_DIR + "**/**/.scss"]
					}
				,   livereload: {
						files : [
							  JS_DIR + "*.js"
							, ASSETS_DIR + 'main.js'
							, STYLE_DIR + "*.css"
							, VIEWS_DIR + "**/*.hbs"
							, TEST_DIR + "_portfolio.js"
							, TEST_DIR + "_tests.js"
							, '!**/node_modules/**'
						]
					,	options: {
							livereload: true
					}
				}
		}
	};

	//because you can't use expressions for identifiers in an object literal
	config["sass"]["dist"]["files"][cssF] = scssF;
	config["styleguide"]["docco"]["files"][STYLEGUIDE_DIR] = SCSS_DIR +'*.scss' ;
	config["styleguide"]["kss"]["files"][STYLEGUIDE_DIR] = SCSS_DIR +'*.scss' ;

	grunt.initConfig( config );


	simplebuild.loadNpmTasks("../config/simplebuild-mocha.js");
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-styleguide');
	grunt.registerTask("default", 'That income tax swag', ['sass:dist', 'styleguide:docco']);
};
function lintOptions() {
	"use strict";
	return {
		bitwise: true,
		curly: true,
		eqeqeq: true,
		forin: true,
		latedef: true,
		newcap: true,
		noarg: true,
		nonew: false,
		undef: true,
		unused: false,
		trailing: false,
		node: true,
		laxcomma: true,
		smarttabs: true,
		debug: true,
		sub: true,
		supernew: true,
		browser: true,
		devel: true,
		strict: true,
		globals : {
			jquery : true
		,   jQuery : true
		,   $ : true
		,   mocha : true
		,   describe : true
		,   it : true
		,   beforeEach: true
		,   afterEach : true
		,   define : true
		,   require : true
		,   requirejs : true
		,   chai : true
		}
	};
}
function sassOptions(){
	return {
		compass : "true"
		,	lineNumbers: "true"
		,	style : 'expanded'
		,	sourcemap: 'true'
	};
}
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  by <%= pkg.author %>*/\n',
			},
			build: {
				src: ['src/*.js'],
				dest: 'lib/myJquery.min.js'
			},
		},
		concat: {
			debug : {
				src: ['<%= uglify.build.src %>'],
				dest: 'lib/myJquery.debug.js'
			}
		},

		jsdoc: {
			src: ['<%= uglify.build.src %>'],
			destination: 'doc',
		},

		less: {
			portal : {
				src: 'stylesheets/myStyle.less',
				dest: 'stylesheets/myStyle.css',
				options: {
					compress: true
				}
			},
		},
		watch: {
			files: ['<%= uglify.build.src %>', '<%= less.portal.src %>'],
			tasks: ['concat','uglify', 'less']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','uglify', 'less']);
};

// Karma configuration
// Generated on Fri Feb 05 2016 11:13:29 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

     // plugins: [
     //     'karma-ng-json2js-preprocessor'
    //  ],
    // list of files / patterns to load in the browser
    files: [

        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/products.controller.js',
        'app/calculator.controller.js',
        'app/sample.controller.js',
        'app/products.product.service.js',
        'app/products.category.service.js',
        'tests/*.json',
        'tests/*.test.js'
        // fixtures
       // {pattern: './tests/*.json', watched: true, served: true, included: false}
    ],


    // list of files to exclude
    exclude: [

    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'app/*.js': ['coverage'],
        //'**/*.html': ['ng-html2js'],
        'tests/*.json': ['ng-json2js']},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

      coverageReporter: {
      type : 'html',
      dir : 'coverage/'
  },
      ngJson2JsPreprocessor: {
          // strip this from the file path
          stripPrefix: 'tests/'
          // prepend this to the
          //prependPrefix: 'served/',

          /* or define a custom transform function
           cacheIdFromPath: function(filepath) {
           return cacheId;
           }
           */
      },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

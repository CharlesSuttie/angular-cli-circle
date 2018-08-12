var KarmaJasmine = require("karma-jasmine");
var KarmaChromeLauncher = require("karma-chrome-launcher");
var KarmaJUnitReporter = require("karma-junit-reporter");
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      KarmaJasmine,
      KarmaChromeLauncher,
      // The angular cli karma plugin typings file is empty
      require('@angular-devkit/build-angular/plugins/karma'),
      KarmaJUnitReporter
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['junit'],
    junitReporter: {
      outputFile: 'test-results.xml',
      useBrowserName: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-gpu',
          '--no-sandbox'
        ]
      }
    },
    singleRun: true
  });
};

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { Config as KarmaConfig, ConfigOptions } from 'karma';
import * as KarmaJasmine from 'karma-jasmine';
import * as KarmaChromeLauncher from 'karma-chrome-launcher';
import * as KarmaJUnitReporter from 'karma-junit-reporter';

interface ExtendedConfigOptions {
  junitReporter: {outputFile: string, useBrowserName: boolean};
  customLaunchers: {[browser: string]: {base: string, flags: string[]}};
}

module.exports = (config: KarmaConfig & ExtendedConfigOptions) => {
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
    browsers: ['myChromeHeadless'],
    customLaunchers: {
      myChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [ '--disable-gpu' ] // required for Windows: see https://bugs.chromium.org/p/chromium/issues/detail?id=737678
      }
    },
    singleRun: true
  });
};

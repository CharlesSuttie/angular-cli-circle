// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { Config as KarmaConfig, ConfigOptions } from 'karma';
import * as KarmaJasmine from 'karma-jasmine';
import * as KarmaChromeLauncher from 'karma-chrome-launcher';
import * as KarmaJUnitReporter from 'karma-junit-reporter';

interface ExtendedConfigOptions extends ConfigOptions {
  junitReporter: {outputFile: string, useBrowserName: boolean};
}

module.exports = (config: KarmaConfig) => {

  const configOptions: ConfigOptions = {
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
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  };

  const extendedConfigOptions: ExtendedConfigOptions = configOptions;
    extendedConfigOptions.junitReporter = {
    outputFile: 'test-results.xml',
    useBrowserName: false
  };

  config.set(extendedConfigOptions);
};

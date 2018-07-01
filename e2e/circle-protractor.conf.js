const jasmineReporters = require('jasmine-reporters');

const config = require('./protractor.conf').config;

config.capabilities = {
  'browserName': 'chrome',
  'chromeOptions': {
    'args': ['--headless', '--disable-gpu']
  }
};

config.onPrepare = function () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      filePrefix: 'e2e'
    }));
};


exports.config = config;

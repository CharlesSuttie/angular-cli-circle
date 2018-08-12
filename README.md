[![CircleCI](https://circleci.com/gh/CharlesSuttie/angular-cli-circle.svg?style=shield)](https://circleci.com/gh/CharlesSuttie/angular-cli-circle)
[![Dependency Status](https://david-dm.org/CharlesSuttie/angular-cli-circle.svg)](https://david-dm.org/CharlesSuttie/angular-cli-circle)

# Angular CLI and CircleCI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

# CircleCI

[CircleCI](https://circleci.com) very generously offer 1,500 minutes of build time on their free plan. 
This repo contains a CircleCI configuration which works with the Angular CLI.

The files which have been added or changed are:

* CircleCI configuration [file](.circleci/config.yml) (Added)
* Protractor Configuration [file](e2e/circle-protractor.conf.js) (New file added)
* Karma Configuration [file](src/circle-karma.conf.ts) (New file added)

The following new scripts have been added to [package.json](package.json):

```
"testCircle": "ng test --karma-config=./src/circle-karma.conf.ts --environment=prod --source-map=false --watch=false --progress=false"
"e2eCircle": "ng e2e --prod --protractor-config=./e2e/circle-protractor.conf.js"
```

The configuration allows test results (failures) to be saved and displayed in the Test Summary section of CircleCI.

![image](https://user-images.githubusercontent.com/18062238/38765216-cf984208-4000-11e8-8879-3fe23dafa09b.png)

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    }
  });

  // UQ Components for public sharing
  var materializeUQComponents = pickFiles('bower_components/uq-its-ss-application-standard-components/css', {
    srcDir: '/',
    destDir: 'uq-standard/'
  });

  // myUQ fonts
  var materializeUQfonts = pickFiles('bower_components/uq-its-ss-application-standard-components/fonts/myuq-icons/font', {
    srcDir: '/',
    destDir: 'fonts/myuq-icons/font/'
  });

  // Fontawesome fonts
  var materializeFAfonts = pickFiles('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'bower_components/fontawesome/fonts/'
  });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([materializeUQfonts, materializeFAfonts, materializeUQComponents]);
};

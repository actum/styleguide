// This optional file is used to load the CLI options and KSS generator needed
// by this template.
//
// The filename should follow standard node.js require() conventions. See
// http://nodejs.org/api/modules.html#modules_folders_as_modules It should
// either be named index.js or have its name set in the "main" property of the
// template's package.json.

var KssHandlebarsGenerator = require('./custom_kss_handlebars_generator.js');

// Tell kss-node which generator this template uses.
module.exports.generator = KssHandlebarsGenerator;

// Tell kss-node which Yargs options this template has.
// See https://github.com/bcoe/yargs/blob/master/README.md#optionskey-opt
module.exports.options = {
  'title': {
    string: true,
    multiple: false,
    describe: 'Title of the style guide',
    default: 'KSS Style Guide'
  }
};

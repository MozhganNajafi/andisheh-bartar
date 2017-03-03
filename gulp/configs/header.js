// Reading pakage.json file and writing its information
// as a Header to our minified files
module.export = {
  pkg: require('../../package.json'),
  banner: [
    '/** !',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @link <%= pkg.homepage %>',
    ' * @copyright 2016 Esapadana = http://espadana.co',
    ' */'
  ].join('\n')
};
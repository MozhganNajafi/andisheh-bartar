// Defining default development enviroment
var env = process.env.NODE_ENV || 'development',
  gutil = require('gulp-util'),
  production = null;

// Checking if the enviroment has changed
if (env === 'development') {
  production = false;
} else {
  production = true;
}

gutil.log(gutil.colors.blue('Starting ') +  gutil.colors.green('Tasks ') +  gutil.colors.cyan('in ')  + gutil.colors.red(env) + gutil.colors.yellow(' Mode!'));

module.exports = {
  production: production,
  type: env
};
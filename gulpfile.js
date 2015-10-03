var elixir = require('laravel-elixir'),
    gulp = require('gulp'),
    jf = require('jsonfile'),
    del = require('del');

var directory = {
    bower: jf.readFileSync(__dirname + '/.bowerrc').directory
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});

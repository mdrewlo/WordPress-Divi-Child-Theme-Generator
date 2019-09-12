# [THEME_NAME]

WordPress Divi Child Theme

## Contents

WordPress Divi Child Theme includes the following files

* `README.md`. The file that you’re currently reading.
* `.gitignore`. Used to exclude certain files from the repository.
* `package.json`. Lists the package dependencies and specific versions required for the project.
* `package-lock.json`. Automatically generated for any operations where npm modifies either the node_modules tree, or package.json.
* `Gruntfile.js`. GruntJS task runner configuration file.
* `functions.php`. WordPress theme specific functions.
* `/images`. Directory for any WordPress theme specific images. Empty by default.
* `/js`. Directory for any WordPress theme specific JavaScript.
* `/js/custom.js` JavaScript enqueued by default. Add any theme specific custom JS here.
* `/scss`. Directory for SCSS source files.
* `/scss/style.scss`. Main SCSS file. Includes files from partials directory.
* `/scss/partials`. Directory for SCSS source.
* `/scss/partials/_childtheme.scss`. Divi Child Theme definitions.
* `/scss/partials/_custom.scss`. Reserved for any theme specific CSS customizations.
* `/scss/partials/_mixins.scss`. Reserved for SCSS mixins.
* `/scss/partials/_variables.scss`. Reserved for SCSS variables.

## Features

* The Divi Child Theme uses the GruntJS task runner to compile SASS to CSS.
* It contains placeholder JavaScript file for any theme specific JS that is required
* There is a theme functions.php file that enqueue's js/custom.js, removes the Divi Project CPT, adds the Divi theme logo to the login page and modifies the logo link to the current site homepage.

## Requirements
* [Git](https://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [GruntJS](http://gruntjs.com/)
* [Sass](http://sass-lang.com/install)

## Installation
* `npm install`

## Theme development watches for changes to SCSS files and compiles to CSS
* `grunt theme` or `grunt watch`

## Theme build compiles all SCSS changes to CSS
* `grunt build`

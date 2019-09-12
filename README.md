# WordPress Divi Child Theme Generator

## Contents

WordPress Divi Child Theme Generator includes the following files

* `README.md`. The file that you’re currently reading.
* `.gitignore`. Used to exclude certain files from the repository.
* `package.json`. Lists the package dependencies and specific versions required for the project.
* `package-lock.json`. Automatically generated for any operations where npm modifies either the node_modules tree, or package.json.
* `Gruntfile.js`. GruntJS task runner configuration file.
* `LICENSE.md`. MIT License file.
* `/src`. Directory containing default child theme files.
* `/screenshots`. Directory containing a sample screenshot.png and screenshot.psd. Place new screenshot files here prior to running generator.
* `/release`. Directory containing .zip's of generated themes ready for upload to WordPress.
* `/build`. Directory containing a subfolder with all theme files for each complete generated child theme.

## Features

* The WordPress Divi Child Theme Generator uses the GruntJS task runner to create a Divi child theme starting template.
* [grunt-prompt](https://github.com/dylang/grunt-prompt) is used to configure theme options and parameters prior to generating the necessary theme files for a Divi child theme.
* The generated Divi child theme is ready with the GruntJS task runner to compile SASS to CSS.

## Requirements
* [Git](https://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [GruntJS](http://gruntjs.com/)
* [Sass](http://sass-lang.com/install)

## Installation
* `npm install`

## Theme generate
* `grunt build`

## Example
```
grunt build
? Theme name: My Theme
? Theme URL: https://example.com
? Theme description: My Divi Child Theme
? Code prefix: my_theme
? Author Name: Author Name
? Author email: email@example.com
? Author URL: https://example.com
? Git repository: Github
? Github username: example
? Please confirm the repository URL: ssh://git@github.com:example/my-divi-child-theme.git Yes
? Screenshot filename located in /screenshots: screenshot.png
```
* This will generate a WordPress Divi Child Theme placing a zip into `/release` that is ready for upload and a theme folder into `/build` with the required GruntJS configuration.

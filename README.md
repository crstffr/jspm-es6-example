# jspm-es6-example

Document followed to create this setup:

[http://developer.telerik.com/featured/choose-es6-modules-today](http://developer.telerik.com/featured/choose-es6-modules-today) 

## Usage

Install NPM dependencies

`npm install`

Install JSPM dependencies

`jspm install`

Run browser-sync on source files

`npm run devServer`

Bundle all dependencies automatically, browser-sync & jspm will now load the bundled scripts

`npm run buildMode`

Unbundle all dependencies, browser-sync & jspm will now load all dependencies individually

`npm run devMode`

Create a self-executing distribution of the app

`npm run dist`

Run browser-sync on dist files

`npm run distServer`

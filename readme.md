> Change your cordova bundle id through CLI

Run this before you run cordova build

Command Line tool to set the bundle id in config.xml

## Install

```sh
$ npm install --save-dev gulp-cordova-bundleid
```

## Add the following to your gulpfile

```js
gulp.task('cordova', require('gulp-cordova-bundleid'));
```
## Usage
```sh
$ gulp cordova --bundle=com.example.yourapp
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

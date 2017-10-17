# OVV – Bootstrap 4 theme

This is a custom Bootstrap 4 theme for producer backend [ovv.ch](https://ovv.ch).

## Use the theme

### With NPM

Install the theme by installing the NPM module via the SSH URL (you must have read access to the repo) (which you should have if you're reading this):

```bash
$ npm install git+ssh://git@github.com:antistatique/ovv-bootstrap.git --save
```

The theme includes all the Bootstrap framework. You just need to import to import `dist/css/bootstrap.min.css` and `dist/js/bootstrap.min.js` in your website to get things going. Don't forget to include the `dist/js/tether.min.js` if you need tooltips or popovers:

Add this to your `<head>`, before all other stylesheets:

```html
<link rel="stylesheet" href="node_modules/ovv-bootstrap/dist/css/bootstrap.min.css">
```

And just before the closing `</body>` tag, as indicated in the [Bootstrap 4 docs](http://v4-alpha.getbootstrap.com/getting-started/introduction/#quick-start):

```html
<!-- we suggest using CDN versions of these popular resources -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js" integrity="sha384-VjEeINv9OSwtWFLAtmc4JCtEJXXBub00gtSnszmspDLCtC0I4z4nqz7rEFbIZLLU" crossorigin="anonymous"></script>
```

or import the resources directly from this theme:

```html
<script src="node_modules/ovv-bootstrap/dist/js/jquery.min.js" ></script>
<script src="node_modules/ovv-bootstrap/dist/js/tether.min.js"></script>
<script src="node_modules/ovv-bootstrap/dist/js/bootstrap.min.js"></script>
```

### By extending Bootstrap

If you want to extend Bootstrap yourself and play with all its fun stuff, just import the `ovv-bootstrap-variables.scss` file before all the Bootstrap assets:

```scss
// override Bootstrap with the OVV theme variables
@import 'node_modules/ovv-bootstrap/dist/ovv-bootstrap-variables';
@import 'node_modules/bootstrap/scss/bootstrap';

// and then import your code
@import 'your/code';
```

## Run the project

To modify the theme, nothing easier:

```bash
$ npm install
$ gulp serve
```

To deploy the gh-pages:

```bash
$ gulp deploy
```

All the useful config is in the `gulp_config.json` file.

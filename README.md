cytoscape-navigator
================================================================================


## Description

Bird&#39;s eye view pan and zoom control for Cytoscape.js


## Dependencies

 * Cytoscape.js ^2.2.0
 * jQuery ^1.4.0 || ^2.0.0


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-navigator`,
 * via bower: `bower install cytoscape-navigator`, or
 * via direct download in the repository (probably from a tag).

`require()` the library as appropriate for your project:

CommonJS:
```js
var cytoscape = require('cytoscape');
var navigator = require('cytoscape-navigator');

navigator( cytoscape ); // register extension
```

AMD:
```js
require(['cytoscape', 'cytoscape-navigator'], function( cytoscape, navigator ){
  navigator( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.


## API

Please briefly describe your API here:

```js
cy.navigator({
  foo: 'bar', // some option that does this
  baz: 'bat' // some options that does that
  // ... and so on
});
```

Or maybe if you have a collection extension:

```js
cy.elements().test({
  foo: 'bar', // some option that does this
  baz: 'bat' // some options that does that
  // ... and so on
});
```


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp publish`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-navigator https://github.com/cytoscape/cytoscape.js-navigator.git`

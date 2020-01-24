cytoscape-navigator
================================================================================
[![DOI](https://zenodo.org/badge/16081125.svg)](https://zenodo.org/badge/latestdoi/16081125)

## Description

Bird&#39;s eye view pan and zoom control for Cytoscape.js


## Dependencies

 * Cytoscape.js ^2.6.0 || ^3.0.0


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

```js
var cy = cytoscape({ /* ... */ });

var defaults = {
    container: false // html dom element
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: true // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
};

var nav = cy.navigator( defaults ); // get navigator instance, nav
```

You may call `nav.destroy()` to remove the navigator widget and associated cleanup.


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp publish`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-navigator https://github.com/cytoscape/cytoscape.js-navigator.git`
1. Make a release on GitHub to automatically register a new Zenodo DOI

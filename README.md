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


## Initialisation

You initialise the plugin on the same HTML DOM element container used for Cytoscape.js:

```js
// First initialise Cytoscape.js
$('#cy').cytoscape({
	/* ... */
});

// Then initialise Navigator
$('#cy').cytoscapeNavigator();
```

If Cytoscape.js initialisation is time consuming Navigator may not start properly. It is recommened to initialise Navigator when Cytoscape.js is ready:

```js
// OnReady event
$('#cy').cy({
	ready: function(){
		$('#cy').cytoscapeNavigator()
	}
	/* ... */
})

// Initialisation chain
$('#cy').cy({
    	/* ... */
}).cy(function(){
    $('#cy').cytoscapeNavigator()
})
```


## Styling

Navigator and its components (thumbnail's container, view's container) may be styled via CSS.
It includes background, border, size and position.

* Ovveride Navigator border and background:

        .cytoscape-navigator{ border: 2px solid red; background: blue; }
* Add border to View container:

        .cytoscape-navigator .cytoscape-navigatorView{ border: 5px solid red; border-radius: 3px; }
* Ovveride overlay container when mouse is over Navigator

        .cytoscape-navigator:hover .cytoscape-navigatorOverlay{ background: yellow; }
* Ovveride view's container when mouse is over view

        .cytoscape-navigator.mouseover-view .cytoscape-navigatorView{ background: rgba(0,255,0,0.5); }

Navigator HTML structure looks like:

    <div class="cytoscape-navigator">
      <canvas></canvas>
      <div class="cytoscape-navigatorView"></div>
      <dib class="cytoscape-navigatorOverlay"></dib>
    </div>


## Available options

Plugin accepts custom options in form of an object:

```js
// The default values of each option are outlined below:
$('#cy').cyNavigator({
	container: false,
	viewLiveFramerate: 0,
	thumbnailEventFramerate: 30,
	thumbnailLiveFramerate: false,
	dblClickDelay: 200
})
```

### container

Can be a HTML or jQuery element or jQuery selector

Used to indicate navigator HTML container. If is false then a new DOM Element is created.

### viewLiveFramerate

Set false to update graph pan (position) only on navigator's view drag end.
Set 0 to instantly update graph pan when navigator's view is dragged.
Set a positive number (N frames per second) to update navigator's view not more than N times per second.

### thumbnailEventFramerate

Maximal number of thumbnail updates per second triggered by graph events.

### thumbnailLiveFramerate

Maximal number of constant thumbnail updates per second. Set false to disable.

### dblClickDelay

Maximal delay (in milliseconds) between two clicks to consider them as a double click.

## Public API

Access plugin methods by calling cyNavigator('function name') from jQuery element graph container:

    $('#cy').cyNavigator('resize') // call resize event to refresh navigator data

List of available methods:

* `'resize'`
* `'destroy'``

## Resize navigator

If you resized Navigator container (e.x. `$('#cy .cytoscape-navigator').width(300)`) then call
Navigator resize method (e.x. `$('#cy').cytoscapeNavigator('resize')`).

If you resized Cytoscape.js container (e.x. `$('#cy').width(900)`) then:

* if you're using Cytoscape.js 2.2.x then call Navigator resize method (e.x. `$('#cy').cytoscapeNavigator('resize')`)
* if you're using Cytoscape.js >= 2.3.x then call [`cy.resize()`](http://js.cytoscape.org/#core/viewport-manipulation/cy.resize)

## Examples

[Default navigator](http://cytoscape.github.io/cytoscape.js-navigator/demo.html)


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp publish`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-navigator https://github.com/cytoscape/cytoscape.js-navigator.git`

cytoscape.js-navigator
======================


## Description

This plugin creates a widget that shows a bird's eye view of the graph such that the entire graph is visible.  Using this widget, the user can zoom and pan about the graph.


## Dependencies

 * jQuery >=1.4
 * Cytoscape.js >=2.1


## Initialisation

You initialise the plugin on the same HTML DOM element container used for Cytoscape.js:

```js

$('#cy').cytoscape({
	/* ... */
});

// the default values of each option are outlined below:
$('#cy').cytoscapeNavigator();

```
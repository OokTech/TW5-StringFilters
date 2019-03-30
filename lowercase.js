/*\
title: $:/plugins/OokTech/StringFilters/lowercase.js
type: application/javascript
module-type: filteroperator

Change all input strings to lowercase

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.lowercase = function(source,operator,options) {
	let results = [];
	source(function(tiddler,title) {
    results.push(title.toLowerCase())
	});
	return results;
};

})();

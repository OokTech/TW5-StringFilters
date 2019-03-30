/*\
title: $:/plugins/OokTech/StringFilters/uppercase.js
type: application/javascript
module-type: filteroperator

Change all input strings to uppercase

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.uppercase = function(source,operator,options) {
	let results = [];
	source(function(tiddler,title) {
    results.push(title.toUpperCase())
	});
	return results;
};

})();

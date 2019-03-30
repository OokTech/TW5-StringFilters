/*\
title: $:/plugins/OokTech/StringFilters/spliton.js
type: application/javascript
module-type: filteroperator

Filter operator that splits each result on every occurance of the parameter

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.spliton = function(source,operator,options) {
	let results = [];
	source(function(tiddler,title) {
		const parts = title.split(operator.operand);
		if(parts.length === 1) {
			results.push(parts[0]);
		} else {
			parts.forEach(function(part) {
				results.push(part);
			})
		}
	});
	return results;
};

})();

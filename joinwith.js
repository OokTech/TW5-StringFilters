/*\
title: $:/plugins/OokTech/StringFilters/joinwith.js
type: application/javascript
module-type: filteroperator

Takes the input titles and joins them into a single title using the operand

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.joinwith = function(source,operator,options) {
	let result = "";
	source(function(tiddler,title) {
    if (result === '') {
      result = title
    } else {
      result += operator.operand + title
    }
	});
	return [result];
};

})();

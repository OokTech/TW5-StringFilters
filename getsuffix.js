/*\
title: $:/plugins/OokTech/StringFilters/getsuffix.js
type: application/javascript
module-type: filteroperator

Recturns the last n characters of each title

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.getsuffix = function(source,operator,options) {
	let results = [];
	source(function(tiddler,title) {
    let out = ''
    if (operator.suffix) {
      let tmp = title.slice(-1*operator.operand)
      out = tmp.padStart(operator.operand, operator.suffix)
    } else {
      out = title.slice(-1*operator.operand)
    }
    results.push(out)
	});
	return results;
};

})();

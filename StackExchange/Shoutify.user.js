// ==UserScript==
// @name        Shoutify
// @namespace   StackExchange
// @include     http://meta.stackoverflow.com/*
// @version     1
// ==/UserScript==


/*
 * Written by Robert 'Bobby' Zenz
 * Public Domain or CC-Zero
 */

function shoutify(elements) {
	for(var idx = 0; idx < elements.length; idx++) {
		element = elements[idx];
		element.innerHTML = element.innerHTML.toUpperCase();
	}
}

divs = document.getElementsByTagName("div");

for(var idx = 0; idx < divs.length; idx++) {
	var div = divs[idx];
	if(div.className == "post-text") {
		shoutify(div.getElementsByTagName("p"));
		shoutify(div.getElementsByTagName("li"));
	}
}

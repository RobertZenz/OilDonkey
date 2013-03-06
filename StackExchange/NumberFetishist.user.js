// ==UserScript==
// @name        NumberFetishist
// @namespace   StackExchange
// @include     http://meta.stackoverflow.com/*
// @version     1
// ==/UserScript==


/*
 * Written by Robert 'Bobby' Zenz
 * Public Domain or CC-Zero
 *
 * Appends the ids of questions and users to the links.
 */

links = document.getElementsByTagName("a");

for(var idx = 0; idx < links.length; idx++) {
	var link = links[idx];
	if(
		link.className == "question-hyperlink" ||
		link.className == "comment-user" ||
		link.className == "profile-link" ||
		link.parentNode.className == "user-details") {
		var id = link.href.split("/")[4];
		link.innerHTML = "#" + id + " " + link.innerHTML;
	}
}

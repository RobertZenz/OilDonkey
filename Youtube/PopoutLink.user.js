// ==UserScript==
// @name        Youtube Popout Link
// @namespace   Youtube
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

function popout() {
	"use strict";
	
	window.open(
		"https://www.youtube.com/watch_popup" + document.location.search,
		"",
		"resizable=yes,scrollbars=no,status=no,toolbar=no,menubar=no,width=640,height=480"
	);
	
	return false;
}

var popoutLink = document.createElement("a");
popoutLink.href = "https://www.youtube.com/watch_popup" + document.location.search;
popoutLink.innerHTML = "❏";
popoutLink.onclick = popout;

var title = document.getElementById("watch-headline-title");
if(title !== null) {
	title.appendChild(popoutLink);
} else {
	// Feather Beta?
	title = document.getElementById("vt");
	if(title !== null) {
		title.appendChild(popoutLink);
	}
}

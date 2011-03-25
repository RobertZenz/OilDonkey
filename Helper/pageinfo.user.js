// ==UserScript==
// @name           PageInfo
// @namespace      http://www.bonsaimind.org
// @description    Shows information about the visited website.
// @include        *
// ==/UserScript==


/*
 * Author: Robert 'Bobby' Zenz, Bobby@bonsaimind.org, http://www.bonsaimind.org
 * License: Public Domain
 */
 

function createItem(parent, name, value) {
	if(value != null) {
		var item = document.createElement("li");
		item.innerHTML = "<strong>" + name + ":</strong> " + value;
		parent.appendChild(item);
	}
}


var info = document.createElement("ul");
info.setAttribute("id", "nameList");
info.setAttribute("style", "\
	background-color: #fce94f;\
	color: #2e3436;\
	border: 2px solid #c4a000;\
	font-size: 0.9em;\
	\
	position: fixed;\
	\
	bottom: 2px;\
	right: 2px;\
	\
	\
	text-align: left;\
	list-style-type: none;\
	\
	padding: 5px 5px 5px 5px;\
	opacity: 0.75;\
");


createItem(info, "Google Ads", unsafeWindow.google_ad_client);
createItem(info, "Google Analytics", unsafeWindow.google_analytics_uacct);

// Add the item to the document
// only if we have information to show.
if(info.childNodes.length > 0) {
	document.body.appendChild(info);
}
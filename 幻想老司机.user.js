// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *://blog.reimu.net/archives/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function(){var pre = document.getElementsByTagName('pre')[0]; pre.style.display = 'block';})();

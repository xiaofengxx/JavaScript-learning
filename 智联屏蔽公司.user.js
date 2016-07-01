// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://sou.zhaopin.com/jobs/*
// @grant        none
// ==/UserScript==
(function() {
    var array = new Array("成都达内科技有限公司");
    var node = document.getElementsByClassName("gsmc");
    for (var i = node.length - 1; i >=  0; i--) {
        var mc = node[i].firstChild.innerHTML;
        for (var j = array.length - 1; j >= 0; j--) {
            if(mc == array[j]){          // 字符匹配有问题
                var node1 = node[i].parentNode;
                while(node1.nodeName != "TABLE"){
                    node1 = node1.parentNode;
                }
                node1.style.display = "none";
            };
        };
    };
})();
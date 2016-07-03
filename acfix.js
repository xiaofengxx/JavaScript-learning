// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.acfun.tv/v/*
// @grant        none
// ==/UserScript==

 (function() {
 	if (document.domain.toLowerCase().indexOf("acfun.tv") < 0 && document.domain.toLowerCase().indexOf("bilibili.com") < 0) {
 		alert("进AcFun再说...");
 		return;
 	}
    var ww = document.querySelector(".info-extra");
    if(ww == null){
        $.info("文章区");
        return;
    }
 	var b = $("a.active.primary").data("from");
 	window._getPlayer = function() {
 		return document.getElementById("ACFlashPlayer-re") ? document.getElementById("ACFlashPlayer-re") : (document.getElementById("not-ACFlashPlayer-re") ? document.getElementById("not-ACFlashPlayer-re") : document.getElementById("area-player"));
 	};
 	window.c = function(d, e) {
 		player = _getPlayer();
 		if (player.id == 'area-player') {
 			$(player).html('<div class="inner ui-draggable"><iframe id="ACFlashPlayer-re" ></iframe></div>');
 			player = document.getElementById("ACFlashPlayer-re");
 		};
 		player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="' + d + '" src="' + d + '" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="' + e + '" name="flashvars"><param name=movie value="' + d + '"></object>'
 	};
 	if (!document.getElementById("video-download") && b != "iqiyi" && b != "pps") {
 		$("#txt-title-view").append('<span id="video-download"><a class="btn primary" href="http://www.talkshowcn.com/page/acfun_danmu.html?vid='+$("a.active.primary").data("vid")+'&p='+(location.href.match(/_(\d+)/)?location.href.match(/_(\d+)/)[1]:"1")+'" title="视频下载" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-download"></i>详细信息及下载</a></span>')
 	}
 	if (b == "youku2") {
 		b = "youku";
 	}
 	if (b == "qq2") {
 		b = "qq";
 	}
 	sourceList = {
 		"sina": "新浪视频",
 		"youku": "优酷网",
 		"tudou": "土豆网",
 		"qq": "腾讯视频",
 		"pps": "PPS.tv",
 		"ku6": "酷六网",
 		"letv": "乐视云",
 		"letv2": "乐视网",
 		"sohu": "搜狐视频",
 		"iqiyi": "爱奇艺",
 		"56": "56网",
 		"pptv": "PPTV",
		"zhuzhan": "主站"
 	};
	if(typeof(sourceList[b]) == "undefined"){
		$.ajax({
			url: "http://www.acfun.tv/video/getVideo.aspx?id="+$("a.active.primary").data("vid"),
			async: false,
			success:function(data){
				$("a.active.primary").data("from",data.sourceType);
				$("a.active.primary").data("sid",data.sourceId);
				b = data.sourceType;
			}
		});
	};
		if(b != "zhuzhan"){
			c("http://static.skydust.net/private/acfun/AcPlayer201412121_D.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").data("vid") + "|" + b + "|" + $("a.active.primary").data("sid"));
			$("#video-download").append('<a class="btn primary" onclick="$(_getPlayer()).prop(\'outerHTML\',$(_getPlayer()).prop(\'outerHTML\').replace(/acfun.tv/,\'talkshowcn.com\'))" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>若解析失败点这儿刷新几次</a>');
			$.info("视频源类型：" + sourceList[b]);
		}else{
			$.info("主站源视频");
		}
 	window.setCookie = function(d, f) {
 		var e = 365;
 		var g = new Date();
 		g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
 		document.cookie = d + "=" + escape(f) + ";expires=" + g.toGMTString();
 	};

 	function a(e) {
 		var d, f = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
 		if (d = document.cookie.match(f)){
 			return unescape(d[2]);
 		} else {
 			return null;
 		}
 	}
 })();
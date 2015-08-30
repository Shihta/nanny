jQuery(document).ready(function () {
    console.log('JS loaded!');
    jQuery('center').remove();
    jQuery('#links-row-1').remove();
    jQuery('#content').css('width', '77%');
    jQuery('#links').css('width', '20%');
    jQuery('#links-row-2').css('width', '100%');
    jQuery('div.article-content-inner ul').remove();
    jQuery('div.article-content-inner p:first').after('<div id="NanniesBar"></div><div id="NanniesSearchSystem"></div>');
    var trcolor;
    if (jQuery('#recommend-tools').length == 0) {
        console.log('normal web');
        trcolor = '#333333'
    } else {
        console.log('mobile web');
        trcolor = '#e3f0d8'
        jQuery('div.header-ad').remove();
        jQuery('div.article-ad').remove();
        jQuery('#recommend-tools').remove();
        jQuery('div.header-bar').remove();
    }

    var districts = [["\u81fa\u5317\u5e02", "6300000000"], ["\u65b0\u5317\u5e02", "6500000000"], ["\u6843\u5712\u5e02", "6800000000"], ["\u81fa\u4e2d\u5e02", "6600000000"], ["\u81fa\u5357\u5e02", "6700000000"], ["\u9ad8\u96c4\u5e02", "6400000000"], ["\u5b9c\u862d\u7e23", "1000200000"], ["\u65b0\u7af9\u7e23", "1000400000"], ["\u82d7\u6817\u7e23", "1000500000"], ["\u5f70\u5316\u7e23", "1000700000"], ["\u5357\u6295\u7e23", "1000800000"], ["\u96f2\u6797\u7e23", "1000900000"], ["\u5609\u7fa9\u7e23", "1001000000"], ["\u5c4f\u6771\u7e23", "1001300000"], ["\u53f0\u6771\u7e23", "1001400000"], ["\u82b1\u84ee\u7e23", "1001500000"], ["\u6f8e\u6e56\u7e23", "1001600000"], ["\u57fa\u9686\u5e02", "1001700000"], ["\u65b0\u7af9\u5e02", "1001800000"], ["\u5609\u7fa9\u5e02", "1002000000"], ["\u9023\u6c5f\u7e23", "0900700000"], ["\u91d1\u9580\u7e23", "0902000000"]];
    var nannysystems = {"1001000000": [["\u5609\u7fa9\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107031"]], "1001700000": [["\u57fa\u9686\u5e02\u793e\u5340\u4fdd\u6bcd\u7b2c\u4e00\u7cfb\u7d71", "CW10206015"], ["\u57fa\u9686\u5e02\u793e\u5340\u4fdd\u6bcd\u7b2c\u4e00\u7cfb\u7d71", "CW10107041"], ["\u57fa\u9686\u5e02\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107042"]], "1001400000": [["\u53f0\u6771\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107035"]], "1001300000": [["\u5c4f\u6771\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107033"]], "6600000000": [["\u53f0\u4e2d\u5e02\u7b2c\u4e00\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107081"], ["\u53f0\u4e2d\u5e02\u7b2c\u4e09\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107083"], ["\u53f0\u4e2d\u5e02\u7b2c\u4e8c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107082"], ["\u53f0\u4e2d\u5e02\u7b2c\u4e94\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107085"], ["\u53f0\u4e2d\u5e02\u7b2c\u516d\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107086"], ["\u81fa\u4e2d\u5e02\u7b2c\u516d\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10210012"], ["\u81fa\u4e2d\u5e02\u7b2c\u56db\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107084"]], "1000900000": [["\u96f2\u6797\u7e23\u5317\u6e2f\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107030"], ["\u96f2\u6797\u7e23\u6597\u516d\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107027"], ["\u96f2\u6797\u7e23\u864e\u5c3e\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107028"]], "1000400000": [["\u65b0\u7af9\u7e23\u5317\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107016"], ["\u65b0\u7af9\u7e23\u5357\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107015"]], "1000800000": [["\u5357\u6295\u7e23\u7b2c\u4e00\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107024"], ["\u5357\u6295\u7e23\u7b2c\u4e8c\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107025"]], "1001600000": [["\u6f8e\u6e56\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107039"], ["\u6f8e\u6e56\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71(\u6e2c\u8a66)", "CW10212004"], ["\u6f8e\u6e56\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71(\u8aa4)", "CW10201003"]], "1000500000": [["\u82d7\u6817\u7e23\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107019"], ["\u82d7\u6817\u7e23\u5357\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107018"]], "1001500000": [["\u82b1\u84ee\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107037"]], "1000200000": [["\u5b9c\u862d\u7e23\u6eaa\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10407001"], ["\u5b9c\u862d\u7e23\u6eaa\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71\u505c\u6b0a", "CW10204001"], ["\u5b9c\u862d\u7e23\u6eaa\u5357\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107008"]], "0900700000": [["\u9023\u6c5f\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107002"]], "1000700000": [["\u5f70\u5316\u7e23\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107021"], ["\u5f70\u5316\u7e23\u5357\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107022"]], "6800000000": [["\u6843\u5712\u5e02\u7b2c\u4e00\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107010"], ["\u6843\u5712\u5e02\u7b2c\u4e09\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107012"], ["\u6843\u5712\u5e02\u7b2c\u4e8c\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107011"], ["\u6843\u5712\u5e02\u7b2c\u4e8c\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206014"], ["\u6843\u5712\u5e02\u7b2c\u4e94\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10301003"], ["\u6843\u5712\u5e02\u7b2c\u516d\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10301004"], ["\u6843\u5712\u5e02\u7b2c\u56db\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107013"]], "1001800000": [["\u65b0\u7af9\u5e02 \u5357/\u9999\u5c71 \u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107046"], ["\u65b0\u7af9\u5e02\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107045"], ["\u65b0\u7af9\u5e02\u6771\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107044"]], "6400000000": [["\u9ad8\u96c4\u5e02\u6771\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206010"], ["\u9ad8\u96c4\u5e02\u6771\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206013"], ["\u9ad8\u96c4\u5e02\u7b2c\u4e00\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107063"], ["\u9ad8\u96c4\u5e02\u7b2c\u4e09\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107065"], ["\u9ad8\u96c4\u5e02\u7b2c\u4e8c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107064"], ["\u9ad8\u96c4\u5e02\u7b2c\u4e94\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107067"], ["\u9ad8\u96c4\u5e02\u7b2c\u516d\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107068"], ["\u9ad8\u96c4\u5e02\u7b2c\u56db\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206012"], ["\u9ad8\u96c4\u5e02\u7b2c\u56db\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107066"], ["\u9ad8\u96c4\u5e02\u897f\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206009"], ["\u9ad8\u96c4\u5e02\u897f\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206011"]], "6300000000": [["\u81fa\u5317\u5e02\u4e2d\u5c71\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107060"], ["\u81fa\u5317\u5e02\u4e2d\u6b63\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107059"], ["\u81fa\u5317\u5e02\u4fe1\u7fa9\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107055"], ["\u81fa\u5317\u5e02\u5167\u6e56\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107052"], ["\u81fa\u5317\u5e02\u5317\u6295\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107056"], ["\u81fa\u5317\u5e02\u5357\u6e2f\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10401001"], ["\u81fa\u5317\u5e02\u58eb\u6797\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107053"], ["\u81fa\u5317\u5e02\u5927\u540c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10401002"], ["\u81fa\u5317\u5e02\u5927\u5b89\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107054"], ["\u81fa\u5317\u5e02\u6587\u5c71\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10401003"], ["\u81fa\u5317\u5e02\u677e\u5c71\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107057"], ["\u81fa\u5317\u5e02\u842c\u83ef\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107058"], ["\u8aa4\u5efa", "CW10407005"]], "0902000000": [["\u91d1\u9580\u7e23\u793e\u5340\u4fdd\u6bcd\u652f\u6301\u7cfb\u7d71", "CW10301012"], ["\u91d1\u9580\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107005"], ["\u91d1\u9580\u7e23\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71(\u505c\u6b0a)", "CW10206016"]], "1002000000": [["\u5609\u7fa9\u5e02\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107050"]], "6500000000": [["\u4e03\u661f\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206006"], ["\u4e09\u91cd\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107077"], ["\u4e2d\u548c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107073"], ["\u5317\u6d77\u5cb8\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107079"], ["\u571f\u57ce\u53ca\u4e09\u5cfd\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206007"], ["\u6587\u5c71\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107078"], ["\u65b0\u838a\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107075"], ["\u677f\u6a4b\u5317\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10302005"], ["\u677f\u6a4b\u5357\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107074"], ["\u6a39\u9daf\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107080"], ["\u6c38\u548c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107076"], ["\u6cf0\u4e94\u6797\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10206008"], ["\u8606\u6d32\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10302010"]], "6700000000": [["\u81fa\u5357\u5e02\u7b2c\u4e00\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107089"], ["\u81fa\u5357\u5e02\u7b2c\u4e09\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107091"], ["\u81fa\u5357\u5e02\u7b2c\u4e8c\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10107090"], ["\u81fa\u5357\u5e02\u7b2c\u56db\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71", "CW10112592"], ["\u81fa\u5357\u5e02\u7b2c\u56db\u5340\u793e\u5340\u4fdd\u6bcd\u7cfb\u7d71(\u505c\u6b0a)", "CW10210002"]]}
    var district_selector = jQuery('<select/>');
    var ns_selector = jQuery('<select/>');
    var btn = jQuery('<button id="btn_ns_search">Search</button>');
    var pre_selection = "";
    district_selector.append(jQuery("<option/>", {value:'', text:'請選擇'}));
    jQuery('#NanniesBar').append(district_selector).append(ns_selector).append(btn);
    jQuery('.article-content-inner select:first').css('width', '90');
    jQuery('.article-content-inner select:last').css('width', '250');
    for (i = 0; i<districts.length; i++) {
//    	console.log(districts[i])
    	district_selector.append(jQuery("<option/>", {value:districts[i][1], text:districts[i][0]}));
    }
    jQuery(district_selector).change(function(){
    	ns_selector.empty();
    	if (this.value == "") {
    		console.log("district empty!");
    		console.log("nannysystem current value: " + ns_selector.attr('value'));
    	} else {
    		console.log("district changed! " + this.value);
    		for (j = 0; j<nannysystems[this.value].length; j++) {
    			ns_selector.append(jQuery("<option/>", {value:nannysystems[this.value][j][1], text:nannysystems[this.value][j][0]}));
    		}
    		console.log("nannysystem current value: " + ns_selector.attr('value'));
    	}
    });

    jQuery('#btn_ns_search').click(function(){
    	//金門縣社區保母系統 CW10107005
    	//var apiurl = "http://127.0.0.1:5000/api/getnannies/CW10107005?callback=?";
    	//臺北市中山區社區保母系統 CW10107060
    	if (ns_selector.attr('value') != "" && pre_selection != ns_selector.attr('value')) {
    		pre_selection = ns_selector.attr('value');
	    	var apiurl = "http://nanny.stark.tw/api/getnannies/"+ns_selector.attr('value')+"?callback=?";
	    	jQuery.getJSON(apiurl, {
	    	}).done( function(data) {
	    		jQuery("#NanniesSearchSystem").empty().append(jQuery("<table/>", {id:"NanniesSearchResultTable", border:"1"}));
	    		jQuery("#NanniesSearchResultTable").append(
	    			'<tr><td rowspan="6"></td><td>姓名</td><td>性別</td><td>年齡</td><td>教育程度</td><td>收托對象</td><td>托育時段</td></tr>' +
	    			'<tr><td colspan="2">登記證編號</td><td colspan="2">技術證號</td><td colspan="2">保母編號</td></tr>' +
	    			'<tr><td colspan="6">連絡電話</td></tr>' +
	    			'<tr><td colspan="6">地址</td></tr>' +
	    			'<tr><td colspan="6">已收托幼兒數</td></tr>' +
	    			'<tr><td colspan="6">在職訓練</td></tr>');
	    		jQuery.each(data, function(i, item) {
	    			var curtr = jQuery(
    					'<tr><td rowspan="6">'+i+'</td><td>'+item[0]+'</td><td>'+item[4]+'</td><td>'+item[7]+'</td><td>'+item[8]+'</td><td>'+item[9]+'</td><td>'+item[10]+'</td></tr>' +
    	    			'<tr><td colspan="2">'+item[1]+'</td><td colspan="2">'+item[2]+'</td><td colspan="2">'+item[3]+'</td></tr>' +
    	    			'<tr><td colspan="6">'+item[5]+'</td></tr>' +
    	    			'<tr><td colspan="6">'+item[6]+'</td></tr>' +
    	    			'<tr><td colspan="6">'+item[11]+'</td></tr>' +
    	    			'<tr><td colspan="6">'+item[12]+'</td></tr>');
	    			if (i%2 == 0) {
	    				curtr.css('background-color', trcolor);
	    			}
	    			jQuery("#NanniesSearchResultTable").append(curtr);
	    		});
	    	});
    	}
    });
});

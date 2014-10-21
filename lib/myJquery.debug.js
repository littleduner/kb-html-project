var doctor_info = [
	{
		'name' : '闫三木'
		,'keshi' : '内脏科'
		,'date' : '2014-01-04'
		,'info' : '著名心脏病手术专家，有较高知名度'
		,'url' : './images/photo.png'
	}
	,{
		'name' : '吕成'  
		,'keshi' : '泌尿科'
		,'date' : '2014-01-04'
		,'info' : '著名泌尿科手术专家，有较高知名度'
		,'url' : './images/photo.png'
	}
	,{
		'name' : '闫三木'
		,'keshi' : '内脏科'
		,'date' : '2014-01-04'
		,'info' : '著名心脏病手术专家，有较高知名度'
		,'url' : './images/photo.png'
	}
	,{
		'name' : '闫三木'
		,'keshi' : '内脏科'
		,'date' : '2014-01-04'
		,'info' : '著名心脏病手术专家，有较高知名度'
		,'url' : './images/photo.png'
	}
];

+function ($) {
	$.fn.buildDoctorInfo = function (settings) {
		var list = settings.list, $area = $(this),html = [];
		for (var i = 0, length = list.length; i < length; i ++) {
			var item = list[i],name = item.name, keshi = item.keshi, date = item.date, info = item.info, url = item.url;
			console.debug(url);
			html.push('<div class="thumbnail doctor_info">');
			html.push('<div class="doctor_photo">');
			html.push(' <img data-src="holder.js/300x200" alt="300x200" src="'+ url +'"></div>');
			html.push('<div class="caption">');
			html.push('<h3>'+name+'</h3><div class="content"><p>科室：'+ keshi +'</p><p>上次会诊时间：'+ date +'</p><p>简介：'+ info +'</p></div>');
			html.push('<p class="tc"><a href="#" class="btn btn-primary">查看详细信息</a></p></div></div>');
		}
		$area.append(html.join(''));
		var $items = $area.find('.doctor_info');
		$items.click(function () {
			var $item = $(this);
			$items.removeClass('doctor_info_current');
			$item.addClass('doctor_info_current');
		});
	} 
} (jQuery)

$(function () {
	$('#tabsleft-tab1').buildDoctorInfo({
		list :doctor_info
	})
});


$(function () {
	var $active = $('header .active'),$headerLine = $('.header_line'),$headerLis = $('header li');
	$headerLine.css('left', $active.index() * 54 + 'px');
	$headerLis.hover(function () {
		var $this = $(this),index = $this.index();
		$headerLine.css('left', $this.index() * 54 + 'px');
	},function () {
		$headerLine.css('left', $active.index() * 54 + 'px');
	});
});
function addCookie(name,value,expiresHours){ 
var cookieString=name+"="+escape(value); 
//判断是否设置过期时间 
if(expiresHours>0){ 
var date=new Date(); 
date.setTime(date.getTime+expiresHours*3600*1000); 
cookieString=cookieString+"; expires="+date.toGMTString(); 
} 
document.cookie=cookieString; 
} 
function getCookie(name){ 
var strCookie=document.cookie; 
var arrCookie=strCookie.split("; "); 
for(var i=0;i<arrCookie.length;i++){ 
var arr=arrCookie[i].split("="); 
if(arr[0]==name)return arr[1]; 
} 
return ""; 
} 
function deleteCookie(name){ 
var date=new Date(); 
date.setTime(date.getTime()-10000); 
document.cookie=name+"=v; expires="+date.toGMTString(); 
} 
var $userinfo;
var $infocenter ;
var $healthinfo;
$(function () {
	$userinfo = {
	'photo':'http://www.baidu.com'
	,'name':'闫三木'
	,'age':'18'
	,'sex':'man'
	,'telphone':'18611572332'
	,'address':'北京市清华大学紫荆公寓'
	,'IDnum':'2342432434324'
	};
	/* 消息中心部分的内容 */
	$infocenter = [
		["在2014年10月30日有一个王医生的预约"],
		["非常抱歉，您编号为20132的订单被取消了，请您注意查收退款"]
	]
	
	$healthinfo={
	'height':'175cm'
	,'weight':'65kg'
	,'familyhistory':'无'
	}
	
	var infocenterul = $('.infocenter').find('ul');
	for(var i=0;i<$infocenter.length;i++){
		infocenterul.append("<li>"+$infocenter[i]+"</li>");
	}
	
	
	
});
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
var doctor_time = [false, true, true, false, true, false,false, true, false, false,true,false,false,false]

// 替换字符串 
function Replace(str,from,to) { 
return str.split(from).join(to); 
} 
// 返回月份（修正为两位数） 
function GetFullMonth(date) 
{ 
var v=date.getMonth()+1; 
if(v>9)return v.toString(); 
return "0"+v; 
} 
 
// 返回日 （修正为两位数） 
function GetFullDate(date) 
{ 
var v=date.getDate(); 
if(v>9)return v.toString(); 
return "0"+v; 
} 
 
// 格式化日期的表示 
function FormatDate(date,str) { 
	str=Replace(str,"yyyy",date.getFullYear()); 
	str=Replace(str,"MM",GetFullMonth(date)); 
	str=Replace(str,"dd",GetFullDate(date)); 
return str; 
} 

function getWeek(value){
	var day = "";
	switch (value) {
		case 0:
			day = "星期日";
			break;
		case 1:
			day="星期一";
			break;
		case 2:
			day = "星期二";
			break;
		case 3:
			day = "星期三";
			break;
		case 4:
			day = "星期四";
			break;
		case 5:
			day = "星期五";
			break;
		case 6:
			day = "星期六";
			break;
	}
	return day;
}
+function ($) {
	$.fn.buildDoctorInfo = function (settings) {
		var list = settings.list, $area = $(this),html = [];
		for (var i = 0, length = list.length; i < length; i ++) {
			var item = list[i],name = item.name, keshi = item.keshi, date = item.date, info = item.info, url = item.url;
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
	$.fn.buildDoctorTime = function (settings) {
		var list = settings.list, $area = $(this),html = [],today = new Date(),format = 'yyyy-MM-dd';
		for(var i = 0; i < 7 ; i ++){
			today.setDate(today.getDate()+1); 
			var week = getWeek(today.getDay()),time = FormatDate(today,format);
			html.push('<li data-date="time"><h2>'+time+'</h2><h3>'+week+'</h3><div class="doctor_time_pm '+ (list[2*i]? 'doctor_time_can' : '') +'"></div><div class="doctor_time_am '+ (list[2*i + 1]? 'doctor_time_can' : '') +'""></div></li>');
		}
		$area.html(html.join(''));
		var $items = $area.find('.doctor_time_can');
		$items.click(function () {
			var $item = $(this);
			$items.removeClass('doctor_time_current');
			$item.addClass('doctor_time_current');
		});
	}
} (jQuery)

$(function () {
	$('#tabsleft-tab1').buildDoctorInfo({
		list :doctor_info
	})
	$('.doctor_time').buildDoctorTime({
		list :doctor_time
	})
});


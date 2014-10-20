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


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
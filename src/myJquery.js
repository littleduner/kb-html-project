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
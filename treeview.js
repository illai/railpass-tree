// Execute this after the site is loaded.
$(function () {

	$('li > ul').each(function (i) {
		var parentLi = $(this).parent('li');
		parentLi.addClass('folder');
		var subUl = $(this).remove();
		parentLi.wrapInner('<a/>').find('a').click(function () {
			subUl.toggle();
		});
		parentLi.append(subUl);
	});
	$('ul ul').hide();
});
var x = $('p.text-here').first().text();
var url = x.match(/http:.*/)[0];
$('#ujihisa').css('position', 'fixed').css('top', '0px').css('left', '0px').css('background-color', 'white').
	html('<a href="%s" target=_blank>hi</a>'.replace('%s', url));

$('.sub').mouseenter(function() {
	console.log('status: mouseover');
	$('.main-nav').css({'z-index': '10000'});
	$('.graphic').css({'z-index': '-1'});
	$('#pacific-islands-wrapper').css({'z-index': '-1'});
	$('#na-islands-wrapper').css({'z-index': '-1'});
	$('.belize').css({'z-index': '-1'});
	$('.elsalvador').css({'z-index': '-1'});
})
	.mouseleave(function() {
	console.log('status: mouseover');
	$('.main-nav').css({'z-index': '0'});
	$('.graphic').css({'z-index': '0'});
	$('#pacific-islands-wrapper').css({'z-index': '0'});
	$('#na-islands-wrapper').css({'z-index': '0'});
	$('#pacific-islands-wrapper').css({'z-index': '0'});
	$('.belize').css({'z-index': '0'});
	$('.elsalvador').css({'z-index': '0'});
	console.log('status: mouse out');
})
;
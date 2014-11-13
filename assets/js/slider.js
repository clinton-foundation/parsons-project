$(function() {
	$( "#slider" ).slider({
		value:2014,
		min: 2005,
		max: 2014,
		step: 1,
		slide: function( event, ui ) {
		$( "#amount" ).val( ui.value );
		}
	});
	$( "#amount" ).val($( "#slider" ).slider( "value" ) );
});

var display_year = [
'2005',
'2006',
'2007',
'2008',
'2009',
'2010',
'2011',
'2012',
'2013',
'2014']

//Maps
var cpc_visitors_map = [
'b85d10fa915f48f28031eabf52d5cc9b',
'b6b9ac7667e343ebb6fffa6e61ba27b2',
'245946ae6beb41b3b404897de44f79a0',
'097268763b444f8c986cdb4b8960505e',
'be20f2b43235400bb29dc70284269578',
'b211fbfcbd314a69b776e94643aaa11e',
'dfd8fbe5e25b4ba99db35919d4b1e989',
'3c0008d876e8442a8ef672004b1fd625',
'f34c1b3846394524823ca55d7f0b0a7f',
'3abea536a6064257831474796d8e987d']


var student_visitors_map = [
'f9b40ada1c6b4f0a8ccb32cd7f6774e7',
'7efd2f54e0b0471a9b21ff03e41ace3c',
'e707d634814f4d4f83c4afbdd06ba1dc',
'8b7cdebd11114ee4853ed29d3840956e',
'cc8205d9b8eb49818f38427c526861bb',
'c99e6fef5b774922a30ce9a8392cc09a',
'24173a39553346279c204ee879c2c98b',
'02f50b0e2af24d6cb1f751355792d6cf',
'04f203af93624d00990c50d99117ca1c',
'804f83ba5f3845d491a6aafa6722e99e']

var scholars_map = [
'f9b40ada1c6b4f0a8ccb32cd7f6774e7',
'7efd2f54e0b0471a9b21ff03e41ace3c',
'e707d634814f4d4f83c4afbdd06ba1dc',
'8b7cdebd11114ee4853ed29d3840956e',
'cc8205d9b8eb49818f38427c526861bb',
'c99e6fef5b774922a30ce9a8392cc09a',
'24173a39553346279c204ee879c2c98b',
'02f50b0e2af24d6cb1f751355792d6cf',
'04f203af93624d00990c50d99117ca1c',
'804f83ba5f3845d491a6aafa6722e99e']

// <iframe width="800" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=7efd2f54e0b0471a9b21ff03e41ace3c&amp;extent=-130.2898,17.4897,-63.6687,56.6155&amp;home=true&amp;zoom=true"></iframe>


var className = $('#map-wrapper').attr('class');

$('#slider').click(function() {
	var selected_year = $("#slider").slider( "value" );
	//for cpc_visitors_map
	if ( className == 'cpc_visitors') {
		console.log('cpc visitors');
		for (var i = 0; i < 10; i++) {	
			if (selected_year == display_year[i]) {
				$('.cpc_visitors').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + cpc_visitors_map[i] + '&amp;extent=-124.3132,28.9146,-70.3484,45&amp;home=true&amp;zoom=true"></iframe>')

				// //if display year = 2009, change legend ranges
				// if (display_year[i] == 2009) {
				// 	console.log(display_year[i]);
				// 	$('.num_range1 p').html('&le; 500');
				// 	$('.num_range2 p').html('&le; 2,000');
				// 	$('.num_range3 p').html('&le; 10,000');
				// 	$('.num_range4 p').html('&le; 30,000');
				// 	$('.num_range5 p').html('&le; 134,000');
				// } else if (display_year[i] != 2009){
				// 	$('.num_range1 p').html('&le; 100');
				// 	$('.num_range2 p').html('&le; 400');
				// 	$('.num_range3 p').html('&le; 1,000');
				// 	$('.num_range4 p').html('&le; 2,000');
				// 	$('.num_range5 p').html('&le; 6,000');
				// };
			};
		};

	}  else if ( className == 'student_visitors') {
		console.log('student');
		for (var i = 0; i < 10; i++) {	
			if (selected_year == display_year[i]) {
				$('.student_visitors').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + student_visitors_map[i] + '&amp;extent=-124.3132,28.9146,-70.3484,45"></iframe>')
			};
		};
	};
});
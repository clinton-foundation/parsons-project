$(function() {
	$( "#slider" ).slider({
		value:2014,
		min: 2009,
		max: 2014,
		step: 1,
		slide: function( event, ui ) {
		$( "#amount" ).val( ui.value );
		}
	});
	$( "#amount" ).val($( "#slider" ).slider( "value" ) );
});

var display_year = [
'2009',
'2010',
'2011',
'2012',
'2013',
'2014']

//Maps
var travels_all_map = [
'a025f273ede14b78a76b3cd46657068d',
'3f02882ab43a45bb8dc3b85dadbe84df',
'1bee7f0c88714a0bb2c7406376ea26e3',
'83c5d12bcc0b460dbb4606729730a5c5',
'090749c7d33247ef9d263c08659fb9df']


var travels_president_map = [
'e0eeff5de41e41f598d558b623188934',
'77b3e247b58142eb9a776295894620e4',
'87418f0d80de4c6092be986c63d7e346',
'2b7feebc94324996b80446100fde1ad0',
'ab4502991c374b349aefeaf8185f5c9a']

var travels_secretary_map = [
'3bdfa52bc8fe43f3a09983316e9f6d9d',
'1addc1d3e33846dabcada4bd777e4b85',
'74fd2160949f42d4a896e1a08cfebc94',
'4ed0636cb5ee4ae4ae1865e7250ee126',
'feeb4eddaa804a80ac70e08cef0b9b83']

var travels_chelsea_map = [
'879fb9f2a69a4be990339c5a58e8c550',
'1406f014356141919ff4e727475e0bba',
'3ca076ef8d214e048c30b33e68efd961',
'2da38d1196424bf8b9d5e2a5266de81e',
'effd9da7fd8f48e49cabbfe9a0957ef4']


var className = $('#map-wrapper').attr('class');

$('#slider').click(function() {
	var selected_year = $("#slider").slider( "value" );
	//for cpc_visitors_map
	if ( className == 'travels_all_map') {
		console.log('travels_all_map');
		for (var i = 0; i <= 5; i++) {	
			if (selected_year == display_year[i]) {
				$('.travels_all_map').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + travels_all_map[i] + '&amp;extent=-180,-51.7184,180,83.462"></iframe>')
			};
		}
	} else if ( className == 'travels_president_map') {
		console.log('travels_president_map');
		for (var i = 0; i <= 5; i++) {	
			if (selected_year == display_year[i]) {
				$('.travels_president_map').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + travels_president_map[i] + '&amp;extent=-180,-51.7184,180,83.462"></iframe>')
			};
		}
	} else if ( className == 'travels_secretary_map') {
		console.log('travels_secretary_map');
		for (var i = 0; i <= 5; i++) {	
			if (selected_year == display_year[i]) {
				$('.travels_secretary_map').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + travels_secretary_map[i] + '&amp;extent=-180,-51.7184,180,83.462"></iframe>')
			};
		}
	} else if ( className == 'travels_chelsea_map') {
		console.log('travels_chelsea_map');
		for (var i = 0; i <= 5; i++) {	
			if (selected_year == display_year[i]) {
				$('.travels_chelsea_map').html('<iframe width="722" height="426" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://cdimalawi.maps.arcgis.com/home/webmap/embedViewer.html?webmap=' + travels_chelsea_map[i] + '&amp;extent=-180,-51.7184,180,83.462"></iframe>')
			};
		}
	} else { 

	};
});
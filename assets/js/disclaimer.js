$('.disclaimer-wrapper').hide();
$('.disclaimer-wrapper').html('<div class="disclaimer-text"></div>');

$('.footer-text a').click(function() {

	$('.disclaimer-text').html('<p><span class="disclaimer-title">Disclaimer</span><br/><br/>The information contained herein is based on information the Clinton Foundation (&#8220;Foundation&#8221;) considers reliable, but the Foundation cannot guarantee that it is accurate or complete, and it should not be relied upon as such. The Foundation is not liable for any errors, including errors of omission, commission, or errors concerning the content or accuracy of the data.<br/><br/>The data reported herein is obtained from available, &#8220;as-is&#8221; information. The Foundation has made a reasonable effort to ensure that this data is the most recently available, accurate, and comprehensive. The data is prepared for information purposes only and may not reconcile with other official reports or statements.<br/><br/>ArcGIS Advanced 10.2, ArcGIS Online, and Google Developer charting tools were used to develop the interactive maps and graphics related to the Foundation. These maps and graphics are structured to allow users to observe the spatial distribution of Foundation programs and Clinton Presidential Center visitors, and are intended for informational purposes only.<br/><br/><span class="disclaimer-close">Close</span></p>')
	
	$('.disclaimer-wrapper').fadeIn(300);

	$('.disclaimer-close').click(function() {
	
		$('.disclaimer-wrapper').fadeOut(300);

	});

});
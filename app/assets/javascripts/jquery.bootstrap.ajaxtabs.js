$(document).ready(function(){
	
	// Adds a tab-loading class to tabs that will load via AJAX
	$('a[data-toggle="tab"][tab-data-src][href]').each(function() {
		$("div"+$(this).attr("href")+".tab-pane").addClass("tab-loading");
	});
	
	// Any tab with a tab-data-src will do an AJAX load on that URL for the tab content
	$('a[data-toggle="tab"]').on('shown', function (e) {
		var tab = $(e.target);
		if(history.pushState) history.pushState(null, null, window.location.pathname+tab.attr('href'))
		if(tab.attr("tab-data-src") != "") {
			$(tab.attr('href')).load(tab.attr("tab-data-src"),function() {
				// Remove the source attribute, so the tab content is only loaded once
				tab.removeAttr("tab-data-src");
				$(this).removeClass("tab-loading");
			});
		}
	});

	$('a[data-toggle="tab"][href="'+window.location.hash+'"]').click();

	// If the selected tab needs AJAX content loaded, this will trigger the load
	$('li.active a[data-toggle="tab"][tab-data-src]').trigger('shown');
});
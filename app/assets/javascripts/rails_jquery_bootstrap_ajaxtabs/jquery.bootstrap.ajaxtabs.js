$(document).ready(function(){
	
	// Any tab with a tab-data-src will do an AJAX load on that URL for the tab content
	$(document).on('shown', 'a[data-toggle="tab"]', function (e) {
		var tab = $(e.target);
		var tab_content = $(tab.attr('href'))

		if(history.pushState) history.pushState(null, null, window.location.pathname+tab.attr('href'))
		if(tab.attr("tab-data-src") != "") {
			if(!tab_content.hasClass('tab-loading')) {
				tab_content.addClass("tab-loading");
				tab_content.load(tab.attr("tab-data-src"),function() {
					// Remove the source attribute, so the tab content is only loaded once
					tab.removeAttr("tab-data-src");
					tab_content.removeClass("tab-loading");
				});
			}
		}
	});

	$('a[data-toggle="tab"][href="'+window.location.hash+'"]').click();

	// If the selected tab needs AJAX content loaded, this will trigger the load
	$('li.active a[data-toggle="tab"][tab-data-src]').trigger('shown');
});
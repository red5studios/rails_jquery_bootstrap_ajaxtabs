# Bootstrap AJAX Tabs

Adds an AJAX-based tab loader to a jQuery+Bootstrap application

## Installation

Add this line to your application's Gemfile:

    gem 'rails_jquery_bootstrap_ajaxtabs', :git => 'git://github.com/red5studios/rails_jquery_bootstrap_ajaxtabs.git'

And then execute `bundle install` from the command line:

    $ bundle

### Include the JavaScript
You have to require the gem JS file in your application.js

	//= require rails_jquery_bootstrap_ajaxtabs

### Include the CSS
A minor SASS file is included that adds a default loading animation to requests. To use this, require the file in your application.scss

	*= require rails_jquery_bootstrap_ajaxtabs

If you would prefer to use your own, add CSS styling to `div.tab-pane.tab-loading` - a centered background animation and a minimum height are recommended.

## Usage

This JavaScript augments the Bootstrap <a href="http://twitter.github.com/bootstrap/components.html#navs">tab/pill navigation components</a> by adding some basic AJAX-based content loading functionality.

To trigger the new functionality, implement the tab structure as per the Bootstrap documentation, but add an additional `tab-data-src` attribute to the tab element. This contains the URL to request the tab contents from. Tab content loading is implemented with the jQuery <a href='http://api.jquery.com/load/'>`$.load()`</a> method, so you may use the optional page fragment syntax.

```html
<ul class="nav nav-pills">
	<li class='active'><a href="#tab1" data-toggle="tab" tab-data-src="/tab/1">Tab 1</a></li>
	<li><a href="#tab2" data-toggle="tab" tab-data-src="/tab/2 #fragment">Tab 2</a></li>
</ul>

<div class="tab-content">
	<div class="tab-pane active" id="tab1"></div>
	<div class="tab-pane" id="tab2"></div>
</div>
```

Tabs may be targeted on page load by using the tab id as an anchor. `pageurl.com#tab2` would immediately select the second tab and trigger the AJAX content load. Switching between tabs on a page will update the anchor of the current page as well, for easy linking.

If the default active tab is an empty AJAX-loading tab, the content request for that tab will be triggered immediately on page load.

Once a tab's content has been loaded it will remain on the page, switching between tabs will not reload the tab content, only change the page element visibility in the manner of the default Bootstrap component.
# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'rails_jquery_bootstrap_ajaxtabs/version'

Gem::Specification.new do |gem|
  gem.name          = "rails_jquery_bootstrap_ajaxtabs"
  gem.version       = RailsJqueryBootstrapAjaxtabs::VERSION
  gem.authors       = ["Jason Smith"]
  gem.email         = ["jsmith@red5studios.com"]
  gem.description   = ""
  gem.summary       = "Adds an AJAX-based tab loader to a jQuery+Bootstrap application"

  gem.files         = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
end

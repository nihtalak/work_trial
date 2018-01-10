require 'rails_helper'
require 'capybara/rails'

RSpec.configure do |config|
  config.include SystemSpecHelper, type: :system

  config.before(:each, type: :system, js: true) do
    driven_by :selenium_chrome_headless
  end
end

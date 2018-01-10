require 'system_helper'

feature 'User can logout', type: :system, js: true do
  scenario 'user is clicking logout' do
    create_user_and_sign_in

    click_on 'Logout'

    expect(page).to have_text('Login')
  end
end

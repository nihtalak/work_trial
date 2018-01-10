require 'system_helper'

feature 'User can login', type: :system, js: true do
  scenario 'with correct credentials' do
    email = Faker::Internet.email
    password = 'pass1234'
    user = create(:user, email: email, password: password)

    visit '/'

    fill_in 'email', with: email
    fill_in 'password', with: password
    click_on 'Login'

    expect(page).to have_text('Logout')
  end

  scenario 'with incorrect credentials' do
    email = Faker::Internet.email
    password = 'pass1234'
    user = create(:user, email: email, password: password)

    visit '/'

    fill_in 'email', with: email
    fill_in 'password', with: 'incorrect password'

    click_on 'Login'

    expect(page).to have_text('Invalid login credentials. Please try again.')
  end
end

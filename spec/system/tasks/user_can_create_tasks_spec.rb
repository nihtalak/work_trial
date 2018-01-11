require 'system_helper'

feature 'User can create tasks', type: :system, js: true do
  scenario 'User is creating new task' do
    user = create_user_and_sign_in
    performer = create(:user)
    attributes = attributes_for(:task)

    click_on 'New Task'
    expect(page).to have_css('.modal-dialog')
    fill_in 'description', with: attributes[:description]
    select performer.name, from: 'performer'
    select 'Done', from: 'state'
    click_on 'Submit'

    expect(page).not_to have_css('.modal-dialog')
    expect(page).to have_text(attributes[:description])
  end
end

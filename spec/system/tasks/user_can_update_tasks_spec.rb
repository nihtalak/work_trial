require 'system_helper'

feature 'User can update his own tasks', type: :system, js: true do
  scenario 'User is update his own task' do
    user = create_user_and_sign_in
    task = create(:task, user: user)

    visit '/'
    find('tbody > tr').click
    expect(page).to have_css('.modal-dialog')
    fill_in 'description', with: 'New name'
    click_on 'Submit'

    expect(page).not_to have_css('.modal-dialog')
    expect(page).to have_text('New name')
    expect(page).not_to have_text(task.description)
  end

  scenario 'User is updating task where they are performer' do
    user = create_user_and_sign_in
    task = create(:task, performer: user)

    visit '/'
    find('tbody > tr').click
    expect(page).to have_css('.modal-dialog')
    fill_in 'description', with: 'New name'
    click_on 'Submit'

    expect(page).not_to have_css('.modal-dialog')
    expect(page).to have_text('New name')
    expect(page).not_to have_text(task.description)
  end
end

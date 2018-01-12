require 'system_helper'

feature 'User can delete his own tasks', type: :system, js: true do
  scenario 'User is deleting his own task' do
    user = create_user_and_sign_in
    task = create(:task, user: user)

    visit '/'
    click_on 'Delete'

    expect(page).not_to have_text('Delete')
  end

  scenario 'User is deleting task where they are performer' do
    user = create_user_and_sign_in
    task = create(:task, performer: user)

    visit '/'
    click_on 'Delete'

    expect(page).not_to have_text('Delete')
  end
end

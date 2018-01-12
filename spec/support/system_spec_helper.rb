module SystemSpecHelper

  include Warden::Test::Helpers

  def self.included(base)
    base.before(:each) { Warden.test_mode! }
    base.after(:each) { Warden.test_reset! }
  end

  def create_user_and_sign_in
    email = Faker::Internet.email
    password = Faker::Internet.password
    user = create(:user, email: email, password: password)
    visit '/'
    fill_in 'email', with: email
    fill_in 'password', with: password
    click_on 'Login'
    user
  end

  def sign_out(resource)
    logout(warden_scope(resource))
  end

  private

  def warden_scope(resource)
    resource.class.name.underscore.to_sym
  end
end

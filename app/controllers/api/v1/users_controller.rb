class Api::V1::UsersController < Api::V1::ApplicationController
  def index
    @users = User.all
  end
end

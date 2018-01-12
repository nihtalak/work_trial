class Api::V1::ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :authenticate_api_v1_user!

  respond_to :json
  responders :json

  protected

  def current_user
    current_api_v1_user
  end
end

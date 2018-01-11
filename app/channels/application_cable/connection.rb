class ApplicationCable::Connection < ActionCable::Connection::Base
  identified_by :current_user

  def connect
    self.current_user = find_verified_user
  end

  protected
  def find_verified_user
    uid = request.params[DeviseTokenAuth.headers_names[:'uid']]
    token = request.params[DeviseTokenAuth.headers_names[:'access-token']]
    client_id  = request.params[DeviseTokenAuth.headers_names[:'client']]

    user = User.find_by_uid(uid)
    if user&.valid_token?(token, client_id)
      user
    else
      reject_unauthorized_connection
    end
  end
end

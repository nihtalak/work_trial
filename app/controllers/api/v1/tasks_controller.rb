class Api::V1::TasksController < Api::V1::ApplicationController
  def index
    @tasks = current_user.all_tasks.includes(:user, :performer)
  end
end

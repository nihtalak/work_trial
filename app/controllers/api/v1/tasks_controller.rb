class Api::V1::TasksController < Api::V1::ApplicationController
  def index
    @tasks = current_user.all_tasks.includes(:user, :performer)
    respond_with @tasks
  end

  def update
    @task = current_user.all_tasks.find(params[:id])
    @task.update(task_params)
    respond_with @task
  end

  def destroy
    current_user.all_tasks.destroy(params[:id])
  end

  protected

  def task_params
    params.require(:task).permit(:description, :performer_id)
  end
end

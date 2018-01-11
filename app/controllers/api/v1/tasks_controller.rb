class Api::V1::TasksController < Api::V1::ApplicationController
  def index
    @tasks = current_user.all_tasks.includes(:user, :performer)
    respond_with @tasks
  end

  def create
    @task = current_user.all_tasks.new(task_params)
    @task.subscribe(changes_listener)
    @task.save
    respond_with @task
  end

  def update
    @task = current_user.all_tasks.find(params[:id])
    @task.subscribe(changes_listener)
    @task.update(task_params)
    respond_with @task
  end

  def destroy
    @task = current_user.all_tasks.find(params[:id])
    @task.subscribe(changes_listener)
    @task.destroy
  end

  protected

  def changes_listener
    TaskChangeListener.new
  end

  def task_params
    params.require(:task).permit(:description, :performer_id, :state)
  end
end

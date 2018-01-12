class TaskChangeListener
  def on_create(task)
    broadcast(task, 'CREATE_TASK')
  end

  def on_update(task)
    broadcast(task, 'UPDATE_TASK')
  end

  def on_destroy(task)
    broadcast(task, 'DELETE_TASK')
  end

  private
  def broadcast(task, type)
    formatted_task = ApplicationController.render('api/v1/tasks/update', assigns: { task: task })
    data = { payload: JSON.parse(formatted_task), type: type }.to_json
    # in case user changed performer id
    recipients = (task.previous_changes[:performer_id] || []).concat([task.user_id, task.performer_id]).compact.uniq
    recipients.each { |id| UserChannel.broadcast_to(id, data) }
  end
end

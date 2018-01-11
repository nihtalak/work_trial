json.id @task.id
json.description @task.description
json.owner { json.(@task.user, :id, :name) }
json.performer { json.(@task.performer, :id, :name) }
json.state @task.state
json.created_at @task.created_at

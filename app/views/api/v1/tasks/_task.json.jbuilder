json.id task.id
json.description task.description
json.owner do
  json.partial! 'api/v1/users/user', user: task.user
end
json.performer do
  json.partial! 'api/v1/users/user', user: task.performer
end
json.state task.state
json.created_at task.created_at

Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :tasks
      resources :users, only: [:index]
    end
  end

  root to: 'welcome#index'
  get '*path', to: 'welcome#index'
end

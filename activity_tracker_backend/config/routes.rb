# config/routes.rb

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :websites, only: [:index, :create]
      resources :website_visits, only: [:create]
    end
  end
  devise_for :users, controllers: { sessions: 'api/v1/sessions' }
end

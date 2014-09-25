Rails.application.routes.draw do
  root to: "home#index"

  namespace :static, :defaults => {:format => :json} do
    namespace :api do
      resources :curricula
      resources :course_materials
      resources :users
    end
  end

  devise_for :users
  devise_scope :user do
    get "login", to: "devise/sessions#new"
    get "logout", to: "devise/sessions#destroy"
  end
end

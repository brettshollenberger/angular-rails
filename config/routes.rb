Rails.application.routes.draw do
  root to: "home#index"

  namespace :static, :defaults => {:format => :json} do
    namespace :api do
      resources :curricula
    end
  end
end

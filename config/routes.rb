Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:index, :update, :create, :show]
    resource :session, only: [:create, :destroy]
  end
    # resources :groups, only: [:index, :update, :create, :show, :destroy] do
    #   resource :group_user, only: [:create, :destroy]
    # end
    # resource :avatar, only: [:create]
    # post 'groups/:id/image', to: 'groups#set_image'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

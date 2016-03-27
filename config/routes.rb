Rails.application.routes.draw do
  


  resources :pages do 
    resources :articles
  end

  devise_for :users

  authenticated :user do
    root 'pages#index'
    get "/users" =>  'users#index'
  end

  unauthenticated :user do
    devise_scope :user do
      get "/" => 'welcome#index'
    end
  end

  resources :conversations do
    resources :messages
  end
  


end

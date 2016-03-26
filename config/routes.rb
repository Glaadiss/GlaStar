Rails.application.routes.draw do
  
  resources :pages do 
    resources :articles
  end

  devise_for :users

  authenticated :user do
  	root 'pages#index'
  end

  root 'welcome#index'

end

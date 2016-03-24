Rails.application.routes.draw do
  
  resources :pages do 
    resources :articles
  end

  devise_for :users
  root 'pages#index'

end

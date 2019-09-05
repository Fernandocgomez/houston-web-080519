Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # new & create

  resources(:bloggers)

  # resources :posts #<- replaces individual restful routes
  get('/posts/new', to: 'posts#new')

  post('/posts', to: 'posts#create')

end

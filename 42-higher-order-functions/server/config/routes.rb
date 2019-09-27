Rails.application.routes.draw do
  resources :steps
  resources :npcs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/characters/:id', { to: 'characters#show'})


  # get('/characters/:id/edit', { to: 'characters#edit' })
  # # Give the user an edit form

  patch('/characters/:id', { to: 'characters#update' })


end

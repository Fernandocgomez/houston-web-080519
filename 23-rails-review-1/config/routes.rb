Rails.application.routes.draw do
  get('/students', to: 'students#index')
  get('/students/:id', to: 'students#show')

  get('/ducks', to: 'ducks#index')
  get('/ducks/new', to: 'ducks#new')
  post('/ducks', to: 'ducks#create')

end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources(:passengers)
  resources(:tickets)
  resources(:airlines)

  get('/session', to: 'airlines#test_session')

end

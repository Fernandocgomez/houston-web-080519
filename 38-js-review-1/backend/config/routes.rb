Rails.application.routes.draw do
  
    get '/all-pets', to: 'pets#get_pets'

    post '/create-pet', to: 'pets#create_pet'

end

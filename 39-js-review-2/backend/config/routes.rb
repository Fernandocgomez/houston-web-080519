Rails.application.routes.draw do
  
  get('/all-pets', to: 'pets#get_pets')    

  post('/make-pet', to: 'pets#create_pet')

  delete('/delete-pet/:id', to: 'pets#delete_pet')

end

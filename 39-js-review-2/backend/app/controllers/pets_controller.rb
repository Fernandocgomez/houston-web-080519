class PetsController < ApplicationController


    def get_pets
        pets = Pet.all
        render json: pets
    end

    def create_pet
        pet = Pet.create({
            name: params[:name],
            image: params[:image]
        })
        render json: pet
    end

    def delete_pet
        pet = Pet.find(params[:id])
        pet.destroy
    end

end

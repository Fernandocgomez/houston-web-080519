class CharactersController < ApplicationController

    def show
        character = Character.find(params[:id])
        render({ json: character })
    end


    def update
        character = Character.find(params[:id])
        character.update({
            x: params[:x],
            y: params[:y]
        })
        render({ json: character })
    end


end
class PlayersController < ApplicationController

    def show
        player = Player.find(params[:id])
        render json: player
    end

    def update
        # Find the player
        # Save params in the database -> Update the player we find
        player = Player.find(params[:id])
        player.update(player_params)
    end

    def player_params
        params.permit( :x, :y )
    end

end
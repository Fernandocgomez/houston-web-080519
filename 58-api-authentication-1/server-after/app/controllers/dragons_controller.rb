class DragonsController < ApplicationController
    before_action :define_current_dragon

    def create
        dragon = Dragon.create(dragon_params)
        render json: dragon
    end

    def index
        if current_user
            render json: current_user.dragons
        else
            render json: []
        end
    end

    def show
        render json: current_dragon
    end

    def update
        if current_user == current_dragon.user
            current_dragon.update(dragon_params)
            render json: current_dragon
        else
            render json: {
                error: true,
                message: 'That is not your dragon'
            }
        end
    end

    def destroy
        current_dragon.destroy
        render json: current_dragon
    end

    def dragon_params
        params.permit(:name, :image, :description, :atWar)
    end

    def define_current_dragon
        if params[:id]
            @current_dragon = Dragon.find(params[:id])
        else
            @current_dragon = Dragon.new
        end
    end

    def current_dragon
        @current_dragon
    end
end
class TravelersController < ApplicationController
    
    def create
        Traveler.create(traveler_params)
        redirect_to travelers_path
    end
    
    def index
        @travelers = Traveler.all
    end
    
    def update
        @traveler = Traveler.find(params[:id])
        @traveler.update(traveler_params)
        redirect_to @traveler
    end

    def show
        @traveler = Traveler.find(params[:id])
    end

    def new
        @traveler = Traveler.new
    end
    
    def destroy
        @traveler = Traveler.find(params[:id])
        @traveler.destroy
        redirect_to travelers_path
    end
    
    def traveler_params
        params.require(:traveler).permit(:name)
    end
end
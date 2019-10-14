class UsersController < ApplicationController
    
    def create
        user = User.create(user_params)
        render json: user
    end

    def authenticate
        user = User.find_by(name: params[:name])
        
        if user != nil && user.authenticate(params[:password])
           session[:user_id] = user.id
           render json: { message: "Sweet! You're Logged In!" }
        else
            render json: { error: true, message: 'Login Failed' }
        end
    end
    
    def user_params
        params.permit(:name, :password)
    end


end
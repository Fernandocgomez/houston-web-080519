class ApplicationController < ActionController::API

    attr_reader :current_user

    before_action :define_current_user

    def define_current_user
        if(session[:user_id])
            @current_user = User.find(session[:user_id])
        end
    end

end

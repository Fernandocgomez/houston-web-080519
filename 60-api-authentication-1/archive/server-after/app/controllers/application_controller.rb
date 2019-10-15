class ApplicationController < ActionController::API

    attr_reader :current_user

    before_action :define_current_user

    def define_current_user

        begin 
            token = request.headers['Authorization'].split(' ')[1]
            # type, token = request.headers['Authorization'].split(' ')
            
            payload = JWT.decode(token, '65bc368fbc69306')[0]

            # payload, header = JWT.decode(token, '65bc368fbc69306')

            @current_user = User.find(payload['id'])

            if @current_user
                return true
            else
                render json: {
                    error: true,
                    message: 'User does not exist'
                }
            end
        rescue 
            # They are not
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end
    end

end

class TestController < ApplicationController

    # rails new --api <name>

    def send_json
        render json: {
            message: "Hello World"
        }
    end

end
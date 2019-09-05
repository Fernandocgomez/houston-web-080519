class BloggersController < ApplicationController
    before_action(:define_current_blogger)
    
    def create
        duplicate = Blogger.find_by({ name: params[:name] })
        if(duplicate == nil && params[:age].to_f > 0 && params[:bio].length > 30)
            Blogger.create(blogger_params)
        end
        redirect_to bloggers_path
    end
    
    def index
        @bloggers = Blogger.all
    end
    
    def update
        @blogger.update(blogger_params)
        redirect_to @blogger
    end
    
    def destroy
        @blogger.destroy
        redirect_to bloggers_path
    end
    
    def define_current_blogger
        if params[:id]
            @blogger = Blogger.find(params[:id])
        else
            @blogger = Blogger.new
        end
    end

    # params = {
    #     blogger: {
    #         name: 'user input',
    #         age: 'user input',
    #         bio: 'user input'
    #     }
    # }
    
    def blogger_params
        params.require(:blogger).permit(:name, :age, :bio)
    end
end
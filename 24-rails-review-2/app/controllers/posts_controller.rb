class PostsController < ApplicationController

    def new
        @destinations = Destination.all
        @bloggers = Blogger.all
        render(:new) # <-- Rails will automatically do this
        # So long as the view the and method have the same name
    end

    def create
        post = Post.create({ 
            title: params[:title], 
            content: params[:content], 
            blogger_id: params[:blogger_id], 
            destination_id: params[:destination_id]
        })
        redirect_to("/posts/#{post.id}")
    end

end

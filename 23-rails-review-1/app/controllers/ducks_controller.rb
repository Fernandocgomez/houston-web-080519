class DucksController < ApplicationController

  def index
    @ducks = Duck.all
  end

  def new 

    render(:'duck-form') #<-- Rails does this automatically
  end

  def create
    Duck.create({
        name: params[:name],
        description: params[:description],
        student_id: params[:student_id]
    })  
    redirect_to("/ducks")
  end

end

class StudentsController < ApplicationController

  def index
    @students = Student.all
    # render(:index) <- Rails automatically does this
  end

  # /students/5
  # params[:id] === 5
  def show      
    # @student = Student.find(params[:id])  
    # Same as:          
    @student = Student.find_by({ id:  params[:id] } )
    # render(:show) <- Rails automatically does this
  end

end

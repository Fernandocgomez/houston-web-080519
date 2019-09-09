class ResponsesController < ApplicationController

    def new
        @message = flash[:message]
        @number_correct = session[:number_correct]
        @question = Question.all.sample
        @question_response = Response.new({ question: @question })
    end

    def create
        if session[:number_correct]
            @number_correct = session[:number_correct]
        else
            @number_correct = 0 # Must be the first time they've answered a question
        end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            puts "                                  "
            puts "----------------------------------"
            puts "Selected Correct: #{response.answer.content} "
            @number_correct = @number_correct + 1
            @message = "Correct"
        else
            puts "                                  "
            puts "----------------------------------"
            puts "Selected Incorrect: #{response.answer.content} "
            @message = "Incorrect"
        end
        puts "Correct so far: #{@number_correct}"
        puts "----------------------------------"
        puts "                                  "
        flash[:message] = @message
        session[:number_correct] = @number_correct
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end

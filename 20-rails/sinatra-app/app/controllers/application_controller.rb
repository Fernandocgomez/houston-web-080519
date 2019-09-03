class ApplicationController < Sinatra::Base

    set(:views, './app/views')

    get('/receipts') do 
        @receipts = Receipt.all
        erb(:receipts) 
    end

    get('/receipts/:id') do 
        @receipt = Receipt.find(params[:id])
        erb(:show)
    end

    get('/receipts/new') do 
        erb(:create_receipt)
    end

    post('/receipts') do 
        Receipt.create({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id],
            customer_id: params[:customer_id]
        })
        redirect '/receipts'
    end

end
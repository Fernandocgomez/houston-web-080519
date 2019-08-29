class ApplicationController < Sinatra::Base

    #  `get` -> HTTP Verb
    # `'/'` -> HTTP Path

    get('/artists') do
        Artist.all.to_json
    end

    post('/artists') do
        Artist.create({
            name: params[:name]
        })
        Artist.all.to_json
    end

   
                     # 1 -> params = { id: 1 }
   get('/find-artist/:id') do 
    Artist.find_by({ id: params[:id] }).to_json
   end
   
end


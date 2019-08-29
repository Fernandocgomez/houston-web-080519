class ApplicationController < Sinatra::Base

    set(:views, './app/views')

    get('/artists') do
        @artists = Artist.all
        erb(:artists)
    end

    post('/artists') do
        Artist.create({
            name: params[:name]
        })
        Artist.all.to_json
    end

    get('/find-artist/:id') do 
        @artist = Artist.find(params[:id])
        erb(:find_artist)
    end
   
end


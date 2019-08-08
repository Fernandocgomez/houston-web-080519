class Book

    @@genres = [
        'Thriller', 'High Fantasy', 'Non Fiction',
        'Travel Guides'
    ]

    def initialize
        
    end

   
    def self.genres
        @@genres
    end

end


Book.genres.push('Science Fiction')


puts Book.genres.length
class Author
    @@all = []

    def initialize
        @@all.push( self )
    end

    def books
        result = []
        BookAuthor.all.each do | book_author |
            if book_author.author == self
                result.push(book_author.book)
            end
        end
        return result
    end

    def self.all
        return @@all
    end
end
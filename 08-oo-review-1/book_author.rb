class BookAuthor
    @@all = []

    attr_accessor :author, :book

    def initialize(author, book)
        @author = author
        @book = book
        @@all.push( self )
    end

    def self.all
        return @@all
    end
end
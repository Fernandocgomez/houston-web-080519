class BookAuthor

    @@all = []

    attr_accessor :book, :author

    def initialize(book, author)
        @book = book
        @author = author
        @@all.push(self)
    end

    def self.all
        return @@all
    end

end
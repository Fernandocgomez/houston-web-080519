class Book

    @@all = []

    def initialize(title)
        @title = title
        @@all.push( self )
    end

    def self.all
        return @@all
    end

    # attr_accessor :author
    def authors
        
    end


    def title
        return @title
    end

    def title=(value)
        @title = value
    end


end
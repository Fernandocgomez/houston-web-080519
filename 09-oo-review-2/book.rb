class Book

    @@all = []

    def initialize(title)
        @title = title
        @@all.push(self)
    end

    def self.all
        return @@all
    end


    # attr_accessor :title
    # Same as:
    def title
        return @title
    end

    def title=(value)
        @title = value
    end

end
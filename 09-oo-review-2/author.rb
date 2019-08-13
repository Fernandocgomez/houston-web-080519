class Author

    @@all = []

    def initialize
        @@all.push(self)
    end

    # def books
    #     join_objects = BookAuthor.all.select do | join_object |
    #         join_object.author == self
    #     end
    #     join_objects.map do | join_object |
    #         join_object.book
    #     end
    # end

    def books
        result = []
        BookAuthor.all.each do | join_object |
            if join_object.author == self 
                result.push(join_object.book)
            end
        end
        return result
    end

    def self.all
        return @@all
    end

end
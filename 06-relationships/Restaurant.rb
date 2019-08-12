class Restaurant

    @@all = []

    def initialize(name)
        @name = name
        @@all.push(self)
    end

    def name
        return @name
    end

    def self.all
        return @@all
    end

end


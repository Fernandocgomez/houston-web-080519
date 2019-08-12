class Receipt

    @@all = []

    def initialize(total, customer, restaurant)
        @total = total
        @customer = customer
        @restaurant = restaurant
        @@all.push(self)
    end

    def total
        @total
    end

    def customer
        @customer
    end

    def restaurant
        return @restaurant
    end

    def self.all
        return @@all
    end

end
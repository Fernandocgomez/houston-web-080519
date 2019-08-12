class Customer

    @@all = []

    def initialize(name)
        @name = name
        @@all.push(self)
    end

    def name
        @name
    end

    def receipts
        result = []
        Receipt.all.each do | receipt |
            if receipt.customer == self
                result.push(receipt)
            end
        end
        return result
    end


    def restaurants
        result = []
        Receipt.all.each do | receipt |
            if receipt.customer == self
                result.push(receipt.restaurant)
            end
        end
        return result
    end

    def self.all
        return @@all
    end

end
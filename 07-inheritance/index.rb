class Animal 

    def initialize(options)
        @species = options[:species] # string
        @name = options[:name] # string
        @color = options[:color] # string
        @owner = options[:owner] # an object (instance of Person)
    end

    def make_mess
        return "whooops"
    end

    def sleep
        return "Zzzzzzz"
    end

    def description 
        return "
            Species: #{@species}
            Name: #{@name}
            Color: #{@color}
        "
    end

end


class Dog < Animal

    def unconditional_love
        return "<3"
    end

end

tess = Dog.new({species: 'terrier', color: 'black', name: 'Tess'})
puts tess.description
puts tess.unconditional_love
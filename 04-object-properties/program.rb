

class Animal

    attr_reader(:first_name, :last_name)
    # Shorcut for:
    # def first_name
    #     return @name
    # end

    attr_accessor(:first_name, :last_name)
    # Shorcut for (both):
    # def first_name
    #     return @name
    # end
    # def first_name=(value)
    #     @first_name = value
    # end

    def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
    end

    def full_name
        return "#{self.first_name} #{self.last_name}"
    end

end


tess = Animal.new('Tess', 'Miles')

tilly = Animal.new('Tilly', 'Miles')

puts tilly.last_name

# puts tess.name
require 'pry'

class Animal

    def initialize(sound, age)
        @my_sound = sound
        @age = age
    end


    def make_sound
        return @my_sound
    end

end

tess = Animal.new('Woof', 10)

puts tess.make_sound



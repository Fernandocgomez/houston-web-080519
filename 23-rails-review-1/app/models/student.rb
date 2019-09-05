class Student < ApplicationRecord
    has_many(:ducks)

    # ^ Shorthand:
    # def ducks
    #     "SELECT * FROM ducks 
    #     WHERE  ducks.student_id = #{self.id}"
    # end

end

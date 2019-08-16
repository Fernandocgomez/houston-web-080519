class Airline < ActiveRecord::Base
    has_many(:tickets)
    has_many(:passengers, { through: :tickets })
    has_many(:planes)
end
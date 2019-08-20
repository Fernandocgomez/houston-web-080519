class Traveler < ActiveRecord::Base
    has_many :tickets, dependent: :destroy
    has_many :airlines, through: :tickets
end
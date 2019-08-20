class Ticket < ActiveRecord::Base
    belongs_to :airline
    belongs_to :traveler
end
class Ticket < ActiveRecord::Base
    belongs_to(:passenger)
    belongs_to(:airline)
end
class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do | table |
      table.belongs_to :traveler # -> Same as: table.integer :traveler_id
      table.belongs_to :airline
    end
  end
end

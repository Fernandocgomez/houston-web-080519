class CreateTravelers < ActiveRecord::Migration[5.2]
  def change
    create_table :travelers do | table |
      table.string :name
    end
  end
end

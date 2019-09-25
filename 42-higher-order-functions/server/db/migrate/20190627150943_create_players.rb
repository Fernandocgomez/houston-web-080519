class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |table|
      table.string :name
      table.integer :x
      table.integer :y
    end
  end
end

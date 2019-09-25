class CreateNpcs < ActiveRecord::Migration[5.2]
  def change
    create_table :npcs do |table|
      table.string :name
      table.integer :x
      table.integer :y
      table.timestamps
    end
  end
end

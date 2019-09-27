class CreateNpcs < ActiveRecord::Migration[6.0]
  def change
    create_table :npcs do |t|
      t.float :x
      t.float :y
      t.float :speed
      t.string :name
      t.timestamps
    end
  end
end

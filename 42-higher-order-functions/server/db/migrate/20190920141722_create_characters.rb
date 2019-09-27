class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.float :x
      t.float :y
      t.float :speed

      t.timestamps
    end
  end
end

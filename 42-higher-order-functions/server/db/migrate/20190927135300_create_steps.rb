class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :direction
      t.integer :duration
      t.belongs_to :npc, null: false, foreign_key: true

      t.timestamps
    end
  end
end

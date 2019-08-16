class Passengers < ActiveRecord::Migration[5.2]
  def change
    create_table(:passengers) do | table |
      table.string(:name)
      table.string(:password)
    end
  end
end

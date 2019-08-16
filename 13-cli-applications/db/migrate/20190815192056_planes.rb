class Planes < ActiveRecord::Migration[5.2]
  def change

    create_table(:planes) do | table |
      table.string(:name)
      table.integer(:airline_id)
    end

  end
end

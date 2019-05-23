class CreateInterventions < ActiveRecord::Migration[5.2]
  def change
    create_table :interventions do |t|
      t.text :description
      t.datetime :planned_at

      t.timestamps
    end
  end
end

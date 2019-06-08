# frozen_string_literal: true

class CreateInterventions < ActiveRecord::Migration[5.2]
  def change
    create_table :interventions do |t|
      t.text :description
      t.text :plate_number
      t.text :car_model
      t.text :insurance_number
      t.datetime :planned_at
      t.references :user, foreign_key: true, null: false

      t.string :address
      t.string :city
      t.string :zipcode

      t.timestamps
    end
  end
end

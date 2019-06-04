# frozen_string_literal: true

json.extract! intervention, :id, :description, :created_at, :planned_at, :plate_number, :car_model, :insurance_number
json.set! :creator do
  json.partial! 'users/user', user: intervention.user
end

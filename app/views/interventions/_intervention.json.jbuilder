# frozen_string_literal: true

json.extract! intervention, :id, :description, :planned_at
json.set! :creator do
  json.partial! 'users/user', user: intervention.user
end

class Property < ApplicationRecord
  # should must have these
  # name, headline, description, address_1, city, state, country
  validates :name, :headline, :description, :address_1, :city, :state, :country, presence: true
end
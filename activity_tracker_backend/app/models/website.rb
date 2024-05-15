class Website < ApplicationRecord
    belongs_to :user
    has_many :website_visits
  end
  
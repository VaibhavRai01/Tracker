class User < ApplicationRecord
    has_many :websites
    has_many :website_visits
    # Include additional Devise modules as needed
  end
  
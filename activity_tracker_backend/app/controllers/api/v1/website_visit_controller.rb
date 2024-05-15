# app/controllers/api/v1/website_visits_controller.rb

module Api
    module V1
      # website_visits_controller.rb
      class WebsiteVisitsController < ApplicationController
        def create
          website_visit = WebsiteVisit.new(website_visit_params)
          if website_visit.save
            render json: website_visit, status: :created
          else
            render json: website_visit.errors, status: :unprocessable_entity
          end
        end

        private

        def website_visit_params
          params.require(:website_visit).permit(:url, :timestamp)
        end
      end

    end
  end
  
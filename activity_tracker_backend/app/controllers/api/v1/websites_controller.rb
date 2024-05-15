# app/controllers/api/v1/websites_controller.rb

module Api
    module V1
      class WebsitesController < ApplicationController
        before_action :authenticate_user!
  
        def index
          @websites = current_user.websites
          render json: @websites
        end
  
        def create
          @website = current_user.websites.build(website_params)
  
          if @website.save
            render json: @website, status: :created
          else
            render json: @website.errors, status: :unprocessable_entity
          end
        end
  
        # Other actions (update, destroy) can be added similarly
  
        private
  
        def website_params
          params.require(:website).permit(:url, :category)
        end
      end
    end
  end
  
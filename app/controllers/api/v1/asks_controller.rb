module Api
  module V1
    class AsksController < ApplicationController
      protect_from_forgery with: :null_session
     skip_before_action :verify_authenticity_token
      def index
        if params.key?(:theme_id) then
          asks = Ask.where(theme_id: params[:theme_id]).all
        else
          asks = Ask.all
        end
        render json: asks
      end

      def show
      ask = Ask.find_by(id: params[:id])
      render json: {id: ask.id, question: ask.question, theme_id:ask.theme.topic}
    end

      def create
         ask = Ask.new(ask_params)
        if ask.save  
          render json: {status: 'Success', message: 'Entry Complete'}, status: :ok
        else
          render json: { error: 'Unsuccessful', message: 'Entry not Complete'}, status: 422
        ##  render json: {status: 'Error', message: 'Entry Not Complete'}, status: :unprocessable_entity
        end
      end

      def update
      render json: ask.update(ask_params)
    end

      private

      def ask_params
        params.permit(:question, :theme_id)
      end

    end
  end
end


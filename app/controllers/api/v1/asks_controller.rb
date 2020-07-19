module Api
    module V1
        class AsksController < ApplicationController
            protect_from_forgery with: :null_session
            def index
              if params.key?(:theme_id) then
              asks = Ask.where(theme_id: params[:theme_id]).all
            else
              asks = Ask.all
            end
              render json: AskSerializer.new(asks).serialized_json
            end

             def show
              ask = Ask.find_by(id: params[:id])
                render json: AskSerializer.new(ask).serialized_json
            end

            def create
              ask = Ask.new(ask_params)

              if ask.save  
                render json: AskSerializer.new(ask).serialized_json
              else
                render json: { error: theme.errors.messages}, status: 422
              end
            end

            def update
              ask = Ask.find_by(id: params[:id])

               if ask.update(ask_params)  
                render json: AskSerializer.new(ask).serialized_json
              else
                render json: { error: theme.errors.messages}, status: 422
              end
            end

            private

            def ask_params
             params.require(:ask).permit(:question, :theme_id)
            end
        end
    end
end


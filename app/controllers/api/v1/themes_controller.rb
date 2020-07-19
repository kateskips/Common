module Api
    module V1
        class ThemesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                themes = Theme.all
                render json: ThemeSerializer.new(themes).serialized_json
             end

            def show
              theme = Theme.find_by(id: params[:id])
                render json: ThemeSerializer.new(theme).serialized_json
            end

            def create
              theme = Theme.new(theme_params)

              if theme.save  
                render json: ThemeSerializer.new(theme).serialized_json
              else
                render json: { error: theme.errors.messages}, status: 422
              end
            end

            def update
              theme = Theme.find_by(id: params[:id])

               if theme.update(theme_params)  
                render json: ThemeSerializer.new(theme).serialized_json
              else
                render json: { error: theme.errors.messages}, status: 422
              end
            end

            private

            def theme_params
              params.require(:theme).permit(:topic)
            end
        end
    end
end


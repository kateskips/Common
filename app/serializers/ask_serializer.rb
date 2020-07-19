class AskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question, :theme_id
end

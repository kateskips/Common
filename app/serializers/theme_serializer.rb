class ThemeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :topic

  has_many :asks
end

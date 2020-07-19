class CreateAsks < ActiveRecord::Migration[5.2]
  def change
    create_table :asks do |t|
      t.string :question
      t.belongs_to :theme, foreign_key: true
    end
  end
end

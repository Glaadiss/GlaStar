class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.string :content
      t.references :page, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

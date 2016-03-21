class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.references :page_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

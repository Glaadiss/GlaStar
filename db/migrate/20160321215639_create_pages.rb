class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.text :content
      t.references :user_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

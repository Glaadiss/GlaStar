class Article < ActiveRecord::Base
  belongs_to :page
  validates_presence_of :name, :page_id, :content
end

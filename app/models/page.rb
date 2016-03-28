class Page < ActiveRecord::Base
  belongs_to :user
  has_many :articles
  validates_presence_of :name, :user_id
  scope :others, -> (user) do
     where("pages.user_id <> ?",user.id)
  end
  scope :your, -> (user) do
    where("pages.user_id = ?",user.id)
  end
end

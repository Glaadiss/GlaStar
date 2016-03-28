class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :pages   
  has_many :conversations, :foreign_key => :sender_id 

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>", face: "50x50!" }, default_url: "http://placehold.it/50x50"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end

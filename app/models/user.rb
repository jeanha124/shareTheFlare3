# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  display_name    :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  gender          :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :fname, :lname, :display_name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :display_name, format: { with: /^[a-zA-Z0-9]*$/, multiline: true }
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :photos,
    foreign_key: :owner_id,
    class_name: :Photo
  has_many :albums,
    foreign_key: :owner_id,
    class_name: :Album
  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment
  has_many :tags
  # has_one_attached :avatar

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end

# :display_name, 

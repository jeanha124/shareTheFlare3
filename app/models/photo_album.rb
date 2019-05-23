class PhotoAlbum < ApplicationRecord
  validates :photo_id, :album_id, presence: true
  validates :album_id, uniqueness: {scope: [:photo_id]}

  belongs_to :photo
  belongs_to :album
end

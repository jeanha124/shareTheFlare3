class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index "photo_albums", name: "index_photo_albums_on_photo_id_and_album_id"
  end
end

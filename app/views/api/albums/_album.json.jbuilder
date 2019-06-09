# debugger
json.extract! album, :id, :title, :description, :owner_id, :photo_ids, :created_at, :updated_at
json.photos album.photos, partial: 'api/photos/photo', as: :photo

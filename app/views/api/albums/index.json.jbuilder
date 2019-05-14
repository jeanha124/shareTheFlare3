@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :owner_id, :created_at, :updated_at
    json.set! :photoIds, album.photos.pluck(:id)
  end
end
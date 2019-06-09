json.extract! photo, :id, :title, :description, :owner_id, :created_at
json.photoUrl url_for(photo.picture)
# json.user photo.user, partial: 'api/users/user', as: :user
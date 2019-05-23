class Api::PhotoAlbumsController < ApplicationController
  def create
    # debugger
    @pa = PhotoAlbum.new(photo_album_params)
    if @pa.save
      # debugger
      render json: {}
    else
      render json: @pa.errors.full_messages, status: 422
  end

  def photo_album_params
    params.require(:photo_albums).permit(:photo_id, :album_id)
  end
end

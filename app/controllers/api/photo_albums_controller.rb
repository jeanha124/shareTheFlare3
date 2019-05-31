class Api::PhotoAlbumsController < ApplicationController
  def create
    # debugger
  end

  def photo_album_params
    params.require(:photo_albums).permit(:photo_id, :album_id)
  end
end

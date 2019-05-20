class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all;
  end

  def new
    @album = Album.new;
  end

  def create
    @album = Album.new(album_params);
    @album.owner_id = current_user.id;
    photo_ids = JSON.parse(params[:photo_ids])
    if @album.save
      photo_ids.each do |photo_id|
        PhotoAlbum.create(photo_id: photo_id, album_id: @album.id)
      end
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end
  
  def show
    @album = Album.find(params[:id]);
  end

  def update
    @album = current_user.albums.find(params[:id]);
    photo_ids = JSON.parse(params[:photo_id])
    if @album.update(album_params)
      photo_ids.each do |photo_id|
        PhotoAlbum.create(photo_id: photo_id, album_id: @album.id)
      end
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id]);
    @album.destroy;
    render :show
  end


  private
  def album_params
    params.require(:album).permit(:owner_id, :title, :description);
  end

end

class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    # debugger
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    # debugger
    photo_ids = params[:album][:photo_ids].split(',')
    # debugger
    if @album.save
      # debugger
      photo_ids.each do |photo_id|
        # debugger
        # p photo_id
        # debugger
        @album.photo_albums.create(photo_id: photo_id.to_i)
      end
      # debugger
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
    photo_ids = params[:album][:photo_ids].split(',')
    @album.photo_ids = photo_ids
    if @album.update(album_params)
      # photo_ids.map do |photo_id|
      #   PhotoAlbum.create(photo_id: photo_id, album_id: @album.id)
      # end
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
    # debugger
    params.require(:album).permit(:owner_id, :title, :description, photo_ids: []);
  end

end

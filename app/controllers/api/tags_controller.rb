class Api::TagsController < ApplicationController
  before_action :require_login!

  def create
    @tag = Tag.new(tag_params)
    @tag.photo_id = params[:photo_id]
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = TagPhotos.find(params[:id])
    @redirect = @tag.photo_id
    @tag.destroy
    @photo = Photo.find(@redirect)
      render :show
  end


  private

  def tag_params
    params.require(:tag).permit(:title, :photo_id)
  end


end

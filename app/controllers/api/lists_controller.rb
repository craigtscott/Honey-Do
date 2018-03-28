class Api::ListsController < ApplicationController

  def index
    if !params[:mobile]
      @lists = List.all.where(author_id: current_user.id)
      render :index
    elsif params[:mobile]
      @lists = List.all.where(author_id: params[:session][:id])
      render :index
    end
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render(
        json: @list.errors.full_messages
      )
    end
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages,
      status: 442
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])
    @list.destroy
    render json: @list
  end

  private

  def list_params
    params.require(:list).permit(:title, :author_id, :id, :mobile)
  end
end

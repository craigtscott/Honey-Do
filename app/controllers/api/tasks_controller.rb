class Api::TasksController < ApplicationController

  def index
    if params[:list_id]
      @tasks = Task.all.where(list_id: params[:list_id])
      render :index
    else
      @tasks = Task.all
      render :index
    end
  end

  def search
    if params[:query].present?
      query = params[:query].downcase
      @tasks = current_user.tasks.where("lower(tasks.title) LIKE ?", "%#{query}%" )
    else
      @tasks = Task.none
    end

    render :index

  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render(
        json: @task.errors.full_messages
      )
    end
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages,
      status: 442
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:title, :list_id, :id, :done)
  end
end

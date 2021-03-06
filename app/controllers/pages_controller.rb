class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:edit, :update, :destroy, :new]
  before_action :find_articles, only: [:show, :update, :destroy]
  def index
    if user_signed_in?
      @pages = Page.others(current_user)
      @yourPages = Page.your(current_user)
    else
      @pages = Page.all
      @yourPages = ""
    end
    
  end


  def show
    
  end


  def new
    @page = Page.new 
  end

  def edit
  end

  def create
    @page = Page.new(page_params)
    @page.user_id = current_user.id

      if @page.save
        redirect_to @page
      else
        render 'new'
      end

  end


  def update
      if @page.update(page_params)
        redirect_to @page
      else
        render 'edit'
      end

  end

  def destroy
    @page.destroy
  end

  private

    def set_page
      @page = Page.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def page_params
      params.require(:page).permit(:name, :content, :user_id)
    end

    def find_articles
      @articles = Article.where(page_id: @page).order("created_at desc")
    end
end



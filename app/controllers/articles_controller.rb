class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update, :destroy, :new, :create]
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :find_page

  def index
    @articles = Article.all
  end

  def show 
    @articles = Article.where(page_id: @page).order("created_at desc")
  end

  def new
    @article = @page.articles.new
  end

  def create
    @article = @page.articles.new(article_params)
    if @article.save
      redirect_to page_article_path(@page, @article)
    else

      render 'new'

    end

    def update
      if @article.update(article_params)
        redirect_to page_article_path(@page, @article), notice: "Edit successfull"
      else
        render 'edit'
      end
    end

    def destroy
      @article.destroy
      redirect_to root_path
    end
  end


  private

  def set_article
    @article = Article.find(params[:id])
  end

  def find_page
    @page = Page.find(params[:page_id])
  end

  def article_params
    params.require(:article).permit(:name, :content, :page_id)
  end

end

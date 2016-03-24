class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update, :destroy, :new, :create]
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  def index
    @articles = Article.all
  end

  def show 

  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:name, :content, :page_id)
  end

end

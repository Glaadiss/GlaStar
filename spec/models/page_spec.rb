require 'rails_helper'

RSpec.describe Page, type: :model do
  before(:all) do
  	@page = Page.new(name: "test_blog",
  					content: "Testy, testy")
  end

  it "should have name" do
  	expect(@page.name).to eq("test_blog")
  end

  it "should have content" do
  	expect(@page.content).to eq("Testy, testy")
  end

  
end

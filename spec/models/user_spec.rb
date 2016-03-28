require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
  	@user = User.new(email: "test@test.com",
  					 password: "zaq1@WSX",
  					 password_confirmation: "zaq1@WSX")
  end

  it 'should have a email' do
  	expect(@user.email).to eq("test@test.com")
  end

  it 'should have a password' do
  	expect(@user.password).to eq("zaq1@WSX")
  end

  it "should have the same password" do
  	expect(@user.password).to eq(@user.password_confirmation)
  end


end

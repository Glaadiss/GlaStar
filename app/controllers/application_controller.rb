class ApplicationController < ActionController::Base

    before_filter :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
      ## You can add add other custom fields that you have added to User Model in place of attr1, attr2
      devise_parameter_sanitizer.for(:sign_up) << :avatar  << :attr1 << :attr2  ## To permit parameters while User creation
      devise_parameter_sanitizer.for(:account_update) << :avatar  << :attr1 << :attr2 ## To permit parameters while User updation
    end
end
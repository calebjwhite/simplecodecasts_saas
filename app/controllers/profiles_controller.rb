class ProfilesController < ApplicationController
    def new
        # forom each user fills out own profile
        @user = User.find( params[:user_id] )
        @profile = @user.build_profile
        @variable = params[:hello]
    end
end
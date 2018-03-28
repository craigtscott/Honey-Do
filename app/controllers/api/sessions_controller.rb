class Api::SessionsController < ApplicationController
  
    def create
    @user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )
    if @user
      if params[:user][:mobile]
        login(@user)
        render :text => "#{@user.session_token},#{@user.id}", status: 200
      else
        login(@user)
        render 'api/users/show'
      end
    else
      if params[:user][:mobile]
        render text: "Email and password combination are invalid", status: 401
      else
      render(
        json: ['Invalid username/password combination'],
        status: 401
      )
      end
    end
  end

  #Verifies the access_token so the client app would know if to login the user.
  def verify_access_token
    debugger
    @user = User.find_by(access_token: params[:session][:access_token])
      if @user
        render text: "verified", status: 200
      else
        render text: "Token failed verification", status: 422
      end
  end


  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render(
        json: ['No user signed in'],
        status: 404
      )
    end
  end
end

# frozen_string_literal: true

class UsersController < ApplicationController

  def update
    @user = current_user
    if @user.update(user_params)
      render :show, status: :created, location: @intervention
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:first_name, :last_name, :address, :zipcode, :city)
  end
end

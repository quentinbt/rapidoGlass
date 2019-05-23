# frozen_string_literal: true

class InterventionsController < ApplicationController
  before_action :set_intervention, only: %i[show update]

  def index
    @interventions = Intervention.all
  end

  def show
  end

  def create
    @intervention = Intervention.new(intervention_params)
    @intervention.user = current_user
    if @intervention.save
      render :show, status: :created, location: @intervention
    else
      render json: @intervention.errors, status: :unprocessable_entity
    end
  end

  def update
    if @intervention.update(intervention_params)
      render :show, status: :created, location: @intervention
    else
      render json: @intervention.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @intervention.destroy
    head :no_content
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def intervention_params
    params.require(:intervention).permit(:description, :planned_at)
  end

  def set_intervention
    @intervention = Intervention.find(params[:id])
  end
end

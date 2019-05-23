class InterventionMailer < ApplicationMailer
  default from: 'glass@rapido.com'

  def new_intervention(user, description)
    @user = user
    @description = description
    mail(to: @user.email, subject: 'Nouvelle intervention')
  end
end

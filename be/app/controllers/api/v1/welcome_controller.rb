class Api::V1::WelcomeController < ApplicationController
  def show
    message = Message.all.sample.text
    welcome_message = {
      data: {
        type: 'message',
        id: nil,
        attributes: {
          body: message
        }
      }
    }
    render json: welcome_message
  end
end

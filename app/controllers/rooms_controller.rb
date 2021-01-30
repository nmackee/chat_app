class RoomsController < ApplicationController
  def show
    # 投稿一覧用
    @messages = Message.includes(:user).order(:id)
    # メッセージ投稿用
    @message = current_user.messages.build
  end
end

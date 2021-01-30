class RoomsController < ApplicationController
  def show
    # 投稿一覧用
    @messages = Message.includes(:user).order(:id)
    # メッセージ投稿用
    @message = current_user.messages.build
  end

  def show_additionally
    # 追加のメッセージを50件取得する
    last_id = params[:oldest_message_id].to_i -1
    @messages = Message.includes(:user).order(:id).where(id: 1..last_id).last(50)
  end
end

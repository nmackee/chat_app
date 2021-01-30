class RoomChannel < ApplicationCable::Channel

  # サーバー側からフロントを監視できているかを確認できたときに動くメソッド
  def subscribed
    #5.times { puts "***test***" }
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

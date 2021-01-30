import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {

  // フロント側からサーバー側を監視できているかを確認できたときに動く関数
  connected() {
    // Called when the subscription is ready for use on the server
    // console.log('test')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});

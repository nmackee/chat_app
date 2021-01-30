import consumer from "./consumer"

// turbolinksの読み込みが終わった後にidを取得しないとエラーが出る
document.addEventListener('turbolinks:load', () => {

  // js.erbないで使用できるように変数を定義しておく
  window.messageContainer = document.getElementById('message-container')

  // 以下のプログラムが他のページで動作しないようにしておく
  if (messageContainer === null) {
    return
  }

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

      // サーバー側から受け取ったHTMLを一番最後に加える
      messageContainer.insertAdjacentHTML('beforeend', data['message'])
    }
  })
})
